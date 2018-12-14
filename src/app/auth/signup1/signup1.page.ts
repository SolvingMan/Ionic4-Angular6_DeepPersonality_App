import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../../provider/user-data.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {

  notification: any;
  email: string;

  notification_action: string;
  notification_type: string;
  batch_size: any;
  frequency : any;
  start_time: string;
  end_time: string;
  constructor(
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService
  ) {
  this.notification_action = 'enable';
  this.notification_type = 'casual';
  this.batch_size = "30";
  this.frequency = "1";
  this.start_time = new Date().toISOString();
  this.end_time =new Date().toISOString();

}


  async ngOnInit() {
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });
  }

  onSelectChange($e) {
    console.log($e, this.notification);
  }

  save() {    
      if (this.notification == "enable" && this.notification_type == undefined) {
        this.alertshow_notification();
        return;
      }
      else {
            if ((this.frequency == undefined || this.batch_size == undefined || this.start_time == undefined || this.end_time == undefined)) {
              this.alertshow_traits();
            }
            else {
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
              headers.set('Content-Type', 'application/json');
              this.http.post('https://cors-anywhere.herokuapp.com/http://www.deepperson.net/api/update_notification_setting',this.notification, {headers: headers}).subscribe(data => {
                  console.log(data);
                  if (data['result'] == 'success' ) {
                    this.userData.setbatch_size(data['updated_user'].batch_size);
                    this.userData.set_complete_question_id(data['updated_user'].complete_question_id);
                    this.router.navigateByUrl("/signup2");
                  }
                  else {
                    this.alertshow_email_exist();
                  }
                }, 
                error => {
                console.log(error);
              })
            }
      }
  }

  async alertshow_notification() {
    const alert = await this.alertCtrl.create({
      header: 'please select the notification setting',
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {}
        }
      ]
    });
    await alert.present();
  }

  async alertshow_email_exist() {
    const alert = await this.alertCtrl.create({
      header: 'Email is exist',
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {}
        }
      ]
    });
    await alert.present();
  }
 
  async alertshow_traits() {
    const alert = await this.alertCtrl.create({
      header: 'please select the all settings',
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
