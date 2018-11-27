import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.page.html',
  styleUrls: ['./signuppage.page.scss'],
})
export class SignuppagePage implements OnInit {
  user : any;
  email : string;
  username : string;
  password : string;
  confirm_password : string;

  constructor(
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService
  ) { 
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirm_password = '';
  }

  ngOnInit() {
  }

  signup() {
    if (this.email === '' || this.username === '' || this.password == '' || this.confirm_password === '' )
    {
      alert("please insert information");
    }
    else {
        this.user = {
          "email" : this.email,
          "username" : this.username,
          "password" : this.password,
        }
        if (this.password === this.confirm_password) {
          const headers = new HttpHeaders();
          headers.set('Content-Type', 'application/json');
          this.http.post('http://onemoretest.co/api/user/signup',this.user, {headers: headers}).subscribe(data => {
              console.log(data);
              if (data['result'] == 'success' ) {
                this.userData.setUsername(data['data'].email);
                this.router.navigateByUrl("/signup1");
              }
              else {
                alert("Already username or email exist");
              }
            }, 
            error => {
            console.log(error);
          })
        }
        else {
          alert("different password");
        }
      }

  }

}
