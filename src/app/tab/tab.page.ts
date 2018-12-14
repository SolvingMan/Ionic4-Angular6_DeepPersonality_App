import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../provider/user-data.service';
import { Datetime,  Events} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
  now: any;
  email: string;
  start_time: any;
  end_time: any;
  time_split: any;
  theme_action: string;
  theme_color: string;
  constructor(
    public userData: UserDataService,
    public events: Events,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  async eventTest() {
    this.now = new Date();
    await this.userData.getUsername().then((username) => {
      console.log(username);
      this.email = username;
    });
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.get('https://cors-anywhere.herokuapp.com/http://www.deepperson.net/api/get_user_info?email='+this.email, {headers: headers}).subscribe(data => {
      console.log(data);
      if (data['result'] == 'success') {

        this.theme_action = data['user'].theme_action;
        this.theme_color = data['user'].theme_color;
      } else {
      }
    }, 
    error => {
    console.log(error);
    })
    if (this.theme_action == 'dynamic') {
      if (this.now.getHours() > 18 ) {
        // console.log("evening");
        if (this.theme_color == 'light' ) {
          this.events.publish('user:theme_color', "dark");
        }
      }
      else {
        // console.log("afternoon"); 
        if (this.theme_color == 'dark' ) {
        this.events.publish('user:theme_color', "light");
        }
      }
    }else {}
  }

}
