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

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService,
    public events: Events,
    private alertCtrl: AlertController,  
  ) { 
    this.swipe = "enable";
    this.theme_action= "static";
    this.theme_color = "light";
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
        } else {
          this.alertshow("server connection error");
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

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/update_theme_setting', this.setting, {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'success') {
        this.swipe = data['user'].swipe;
        this.theme_action = data['user'].theme_action;
        this.theme_color = data['user'].theme_color;
        this.events.publish('user:theme_color', this.theme_color);
      } else {
        this.alertshow("server connection error");
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

}
