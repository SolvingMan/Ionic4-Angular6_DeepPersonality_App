import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController, Events } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';

import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  email: string;
  google_login_email: string;
  password: string;
  user: any;

  title: string;

  constructor( 
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService,
    public events: Events,
    private afAuth: AngularFireAuth, 
    private platform: Platform
  ) { 
    this.email= '';
    this.password= '';
  }

  ngOnInit() {
    
  }

  login() {

    if ( this.email === "" || this.password == '') {
      this.alertshow("Please insert Email and Password");
    } 
    else {
      this.user = { 
        "email" : this.email,
        "password" : this.password
      };
  
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.post('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/user/login', this.user, {headers: headers}).subscribe(data => {
      console.log(data);
        if (data['result'] == 'successful') {
          this.events.publish('user:theme_color', data['data'].theme_color);
          this.userData.setUsername(this.email);
          this.userData.setbatch_size(data['data'].batch_size);
          this.userData.set_complete_question_id(data['data'].complete_question_id);
          this.router.navigateByUrl("tab/(question:question)");
        }
        else {
         this.alertshow("Email or Password in Invalid");
        }
      }, 
      error => {
      console.log(error);
      })
    }
  }

  async alertshow(msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {}
        }
      ]
    });
    await alert.present();
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(credential.user);
      this.google_login_email = credential.user.email;
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      console.log(this.google_login_email);
      this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/get_user_info?&email='+this.google_login_email, {headers: headers}).subscribe(data => {
      console.log(data);
        if (data['result'] == 'success') {
            //  sign in authentication  
          this.events.publish('user:theme_color', data['user'].theme_color);
          this.userData.setUsername(this.google_login_email);
          this.userData.setbatch_size(data['user'].batch_size);
          this.userData.set_complete_question_id(data['user'].complete_question_id);
          this.router.navigateByUrl("tab/(question:question)");
        }
        else {
        //   sign up
        console.log("sign up");
        this.user = {
          "email" : this.google_login_email,
          "username" : credential.user.displayName,
          "password" : "",
        }
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        this.http.post('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/user/signup',this.user, {headers: headers}).subscribe(data => {
            console.log(data);
            if (data['result'] == 'success' ) {
              this.userData.setUsername(data['data'].email);
              this.router.navigateByUrl("/signup1");
            }
            else {
            }
          }, 
          error => {
          console.log(error);
        })     
        }
      }, 
      error => {
      console.log(error);
      })      
    } catch(err) {
      console.log(err)
    }  
  }
  async nativeGoogleLogin(): Promise<void> {
  } 

}
