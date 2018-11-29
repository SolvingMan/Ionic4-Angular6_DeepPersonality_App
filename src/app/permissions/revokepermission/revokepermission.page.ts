import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-revokepermission',
  templateUrl: './revokepermission.page.html',
  styleUrls: ['./revokepermission.page.scss'],
})
export class RevokepermissionPage implements OnInit {
  email: string;
  all_handshake: any;
  all_handshake_sort: any;
  viewMode: string;
  refresh: any;

  trait: string;
  user_triats: any;

  constructor(
    public router: Router,
    private http: HttpClient,
    public navCtrl: NavController,
    public userData: UserDataService
  ) {
    this.viewMode = 'date';
    // this.all_handshake[1].delete_trait = 'happy';
  }

  async ngOnInit() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/get_handshakes?email=' + this.email, { headers: headers }).subscribe(data => {
      console.log(data);
      if (data['result'] == 'successful') {
        this.all_handshake = data['data'];
        this.all_handshake_sort = data['sort_data'];
        console.log(this.all_handshake[0].email);
      } else {
        this.all_handshake = [];
        alert("server connection error");
      }
    },
      error => {
        console.log(error);
      })
  }

  onSelectChange(name, triat, index) {
    console.log(name, triat, index, this.all_handshake[index].email, this.email);

    if (triat !== undefined) {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/delete_compare_traits?email=' + this.email + '&compare_email=' + this.all_handshake[index].email + '&delete_trait=' + triat, { headers: headers }).subscribe(data => {
      console.log(data);
        if (data['result'] == 'successful') {
          // this.refresh = this.all_handshake;
          // this.all_handshake = [];
          // this.all_handshake = this.refresh; 
          // this.all_handshake[index].compare_traits = data['compare_traits'];
          // this.all_handshake_sort[index].compare_traits = data['compare_traits'];
          this.ngOnInit();
        } else if (data['result'] == 'no array') {
          this.ngOnInit();
        }
        else if (data['result'] == "no connection people") {
          // alert("no connection people");
          this.ngOnInit();
        }
        else {
          alert("server connection failed");
        }
      },
        error => {
          console.log(error);
        })
    } else { }

  }


}