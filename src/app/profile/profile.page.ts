import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, Datetime, Events } from '@ionic/angular';
import { UserDataService } from '../provider/user-data.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  viewMode: string;
  email : string;

  positive_cs : any[];
  negative_cs : any[];

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController, 
    public events: Events, 
    public userData: UserDataService,
    private alertCtrl: AlertController, 
  ) {
    this.viewMode = "positive";
    events.subscribe('batch_anwer_done', (email)=> {
      this.ngOnInit();
    })
   }

   async ngOnInit() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.deepperson.net/api/positive_cs?email='+this.email, {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'success') {
        this.positive_cs = data['person_cs_positive'];
        this.negative_cs = data['person_cs_negative'];
      } else if (data['result'] == 'failed') {
        this.alertshow("You don't have any Personality Test.");
      } else {
        this.alertshow("Server Connection Failed");
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
