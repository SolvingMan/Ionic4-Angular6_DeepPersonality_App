import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.page.html',
  styleUrls: ['./comparison.page.scss'],
})
export class ComparisonPage implements OnInit {
  email: string;
  all_compares: any;
  all_compares_sort: any;
  viewMode: string;

  constructor(
    public router: Router,
    private http: HttpClient,
    public navCtrl: NavController,
    public userData: UserDataService
  ) { this.viewMode = "date"; }

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
        this.all_compares = data['data'];
        this.all_compares_sort = data['sort_data'];
      } else {
        this.all_compares = [];
        this.all_compares_sort = [];
        alert("server connection error");
      }
    },
      error => {
        console.log(error);
      })
  }

}
