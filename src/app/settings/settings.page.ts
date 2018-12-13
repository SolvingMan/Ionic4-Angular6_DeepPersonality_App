import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime, Events } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  setting: any
  swipe: string;
  theme_action: string;
  theme_color: string;
  email: string;
  now: any;

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService,
    public events: Events,
    private alertCtrl: AlertController,  
  ) { 
    this.swipe = "";
    this.theme_action= "";
    this.theme_color = "";
  }

  ngOnInit() {
    this.getUsername();
  }

  async getUsername() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });

    const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/get_user_info?email='+this.email, {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success') {
          this.swipe = data['user'].swipe;
          this.theme_action = data['user'].theme_action;
          this.theme_color = data['user'].theme_color;
          if (this.theme_action == "static") {
            this.events.publish('user:theme_color', data['user'].theme_color);
          }
        } else {
          this.alertshow("Server connection error");
        }
      }, 
      error => {
      console.log(error);
      })
  }

  save() {
    this.setting ={
      "email": this.email,
      "swipe": this.swipe,
      "theme_action": this.theme_action,
      "theme_color": this.theme_color
    };
    this.now = new Date();
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/update_theme_setting', this.setting, {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'success') {
        this.swipe = data['user'].swipe;
        this.theme_action = data['user'].theme_action;
        this.theme_color = data['user'].theme_color;
        // this.events.publish('user:theme_color', this.theme_color);
        if (this.theme_action == "static") {
          this.events.publish('user:theme_color', data['user'].theme_color);
        } else {
          if (this.now.getHours() > 18 ) {
            // console.log("evening");
            if (this.theme_color == 'light' ) {
              this.events.publish('user:theme_color', "dark");
            }
          }
          else {
            // console.log("afternoon"); 
            if (this.theme_color == 'dark' ) {
            this.events.publish('user:theme_color', "light");
            }
          }
        }
        this.events.publish('swipe', this.swipe);
      } else {
        this.alertshow("Server connection error");
      }
    }, 
    error => {
    console.log(error);
    })
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

  signout() {
    this.router.navigateByUrl("/loginpage");
  }
}