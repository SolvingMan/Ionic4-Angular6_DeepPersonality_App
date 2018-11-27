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
  batch_size: number;
  frequency : number;
  start_time: Datetime;
  end_time: Datetime;
  constructor(
    public router: Router, 
    private alertCtrl: AlertController,  
    public navCtrl: NavController,  
    private http: HttpClient,
    public userData: UserDataService
  ) {}


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
        alert ('please select the notification setting');
        return;
      }
      else {
        if (this.notification_type == "custom") {
            if ((this.frequency == undefined || this.batch_size == undefined || this.start_time == undefined || this.end_time == undefined)) {
              alert ('please select the all settings');
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
              this.http.post('http://onemoretest.co/api/update_notification_setting',this.notification, {headers: headers}).subscribe(data => {
                  console.log(data);
                  if (data['result'] == 'success' ) {
                    this.userData.setbatch_size(data['updated_user'].batch_size);
                    this.userData.set_complete_question_id(data['updated_user'].complete_question_id);
                    this.router.navigateByUrl("/signup2");
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
      }
  }
 

}
