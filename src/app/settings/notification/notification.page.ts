import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notification: any;

  email : string;
  notification_action : string;
  notification_type : string;
  batch_size : number;
  frequency : number;
  start_time : Datetime;
  end_time : Datetime;


  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService
  ) { }

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
        this.notification_action = data['user'].notification_action;
        this.notification_type = data['user'].notification_type;
        this.batch_size = data['user'].batch_size;
        this.frequency = data['user'].frequency;
        this.start_time = data['user'].start_time;
        this.end_time = data['user'].end_time;
      } else {
        alert("server connection error");
      }
    }, 
    error => {
    console.log(error);
    })
  }

  save() {
    this.notification = {
      "email" : this.email,
      "notification_action" : this.notification_action,
      "notification_type" : this.notification_type,
      "batch_size" : this.batch_size,
      "frequency" : this.frequency,
      "start_time" : this.start_time,
      "end_time" : this.end_time
    };

    const headers = new HttpHeaders();
    this.http.post('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/update_notification_setting',this.notification, {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success' ) {
          this.userData.setbatch_size(data['updated_user'].batch_size);
          alert("succssfully");
        }
        else {
          alert("Already username or email exist");
        }
      }, 
      error => {
      console.log(error);
    })

  }

}
