import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
  constructor( 
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService
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
          this.userData.setUsername(this.email);
          this.userData.setbatch_size(data['data'].batch_size);
          this.userData.set_complete_question_id(data['data'].complete_question_id);
          this.router.navigateByUrl("tab/(question:question)");
        }
        else {
          alert("login failed");
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

}
