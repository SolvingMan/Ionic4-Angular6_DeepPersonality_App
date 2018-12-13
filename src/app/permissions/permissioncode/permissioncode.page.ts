import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-permissioncode',
  templateUrl: './permissioncode.page.html',
  styleUrls: ['./permissioncode.page.scss'],
})
export class PermissioncodePage implements OnInit {
  email: string;
  permission_code: string;

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService,
    private alertCtrl: AlertController, 
  ) { 

  }

  async ngOnInit() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/get_permission_code?email='+this.email, {headers: headers}).subscribe(data => {
      // console.log(data);
      if (data['result'] == 'successful') {
        // this.question = data['question'].questions;
        this.permission_code = data['code'];
      } else {
        this.alertshow("Server connection error");
      }
    }, 
    error => {
    console.log(error);
    })

  }

  generate_code() {
    this.alertshow("the connection will be deleted, do you want to continue?")
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/generate_code?email='+this.email, {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'successful') {
        // this.question = data['question'].questions;
        this.permission_code = data['code'];
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

}
