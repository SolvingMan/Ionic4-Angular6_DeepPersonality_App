import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addpermission',
  templateUrl: './addpermission.page.html',
  styleUrls: ['./addpermission.page.scss'],
})
export class AddpermissionPage implements OnInit {
  all_traits: any;
  add_permission_user: any;

  email: string;
  compare_email: string;
  compare_code: string;
  compare_traits: any[] = [];

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService
  ) { }

  ngOnInit() {
    this.get_all_traits();
    this.getUsername();
  }

  async getUsername() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });
  }

  get_all_traits() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('http://192.168.0.70:8100/api/get_all_traits', {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'successful') {
          this.all_traits = data['traits'];
          // for (let i = 0; i < this.all_traits.length; i++) {
          //   i % 2 == 0 ? this.all_traits[i].enable = true : this.all_traits[i].enable = false;
          // }
      } else {
        alert("server connection error");
      }
    }, 
    error => {
    console.log(error);
    })
  }

  btnclick(index) {
      this.all_traits[index].enable = !this.all_traits[index].enable;
      console.log(this.all_traits[index].traits);
  }

  save() {
      this.compare_traits = [];
      for (let i = 0; i < this.all_traits.length; i++) {
        this.all_traits[i].enable == true ? this.compare_traits.push(this.all_traits[i].traits) : console.log("d") ;
      }
      if (this.compare_traits.length == 0 || this.compare_email == undefined || this.compare_code == undefined) {
        alert("please select one more  triait");
      }
      else {
        this.add_permission_user = {
            "email" : this.email,
            "compare_email": this.compare_email,
            "compare_traits": this.compare_traits,
            "compare_code": this.compare_code
        };
        
        console.log(this.add_permission_user);

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        
        this.http.post('http://192.168.0.70:8100/api/add_permission', this.add_permission_user, {headers: headers}).subscribe(data => {
          console.log(data);
          if (data['result'] == 'successful') {
              // this.all_traits = data['traits'];

              
          } else {
            alert("server connection error");
          }
        }, 
        error => {
        console.log(error);
        })
      }
  }

}
