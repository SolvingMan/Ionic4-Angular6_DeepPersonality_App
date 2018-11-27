import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usercomparison',
  templateUrl: './usercomparison.page.html',
  styleUrls: ['./usercomparison.page.scss'],
})
export class UsercomparisonPage implements OnInit {
  email: string;
  all_handshake: any;
  compare_email: string;
  compare_result: any;
  compare_result_difference: any;
  viewMode: string;

  constructor(
    public router: Router,
    private http: HttpClient,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public userData: UserDataService
  ) {
    this.viewMode ='similar'
   }

  ngOnInit() {
    console.log("dsf")
  }

  async ionViewWillEnter() {
    const num = this.route.snapshot.paramMap.get('index');
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('http://onemoretest.co/api/get_handshakes?email=' + this.email, { headers: headers }).subscribe(data => {
      console.log(data);
      if (data['result'] == 'successful') {
        this.all_handshake = data['data'];
        this.compare_email = this.all_handshake[num].email;
        console.log(this.compare_email);
        this.get_all_compare();
      } else {
        this.all_handshake = [];
        alert("server connection error");
      }
    },
      error => {
        console.log(error);
      })
  }

    get_all_compare() {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.get('http://onemoretest.co/api/compare_traits_result?email=' + this.email + '&compare_email='+ this.compare_email, { headers: headers }).subscribe(data => {
        console.log(data);
        if (data['result'] == 'successful') {
          this.compare_result = data['compare_result'];
          this.compare_result_difference = data['compare_result_difference'];
        } else {
          this.all_handshake = [];
          alert("server connection error");
        }
      },
        error => {
          console.log(error);
        })
    }
    

}
