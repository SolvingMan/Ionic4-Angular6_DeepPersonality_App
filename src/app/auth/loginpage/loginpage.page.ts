import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController, Events } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  email: string;
  password: string;
  user: any;

  title: string;

  constructor( 
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService,
    public events: Events
  ) { 
    this.email= '';
    this.password= '';
  }

  ngOnInit() {
    
  }

  login() {

    if ( this.email === "" || this.password == '') {
      this.loginfailed();
    } 
    else {
      this.user = { 
        "email" : this.email,
        "password" : this.password
      };
  
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.post('http://192.168.0.70:8100/api/user/login',this.user, {headers: headers}).subscribe(data => {
      console.log(data);
        if (data['result'] == 'successful') {
          this.events.publish('user:theme_color', data['data'].theme_color);
          this.userData.setUsername(this.email);
          this.userData.setbatch_size(data['data'].batch_size);
          this.userData.set_complete_question_id(data['data'].complete_question_id);
          this.router.navigateByUrl("tab/(question:question)");
        }
        else {
         this.alertshow();
        }
      }, 
      error => {
      console.log(error);
      })
    }
  }

  loginfailed() {
    console.log("loginfailed function") 
  }

  async alertshow() {
    const alert = await this.alertCtrl.create({
      header: 'Email is not exist',
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {}
        }
      ]
    });
    await alert.present();
  }

}
