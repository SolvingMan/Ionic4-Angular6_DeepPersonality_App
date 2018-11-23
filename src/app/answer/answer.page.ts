import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {
  email : string;
  question : string;
  question_id : number;
  user : any;
  loading: boolean;
  tesarray: any;
  data: any;
  previous_button: boolean;
  batch_calculate : number;
  batch_size : number;

  timerId : any;
  

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public userData: UserDataService
  ) {
    this.email = '';
    this.question = '';
    this.loading = false;
    this.question_id = 10;
    this.batch_calculate = 0;
  }

   ngOnInit() {
    this.getUsername();
   
  }

  async getUsername() {
      await this.userData.getUsername().then((username) => {
        console.log(username);
        this.email = username;
      });
      await this.userData.get_complete_question_id().then((complete_question_id) => {
        this.question_id = complete_question_id;
        console.log(complete_question_id);
      });
      await this.userData.getbatch_size().then((batch_size) => {
        this.batch_size = batch_size;
        console.log(batch_size);
      });

      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.http.get('http://192.168.0.70:8100/api/start_question?email='+this.email+'&question_id='+this.question_id, {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success') {
          this.question = data['question'].questions;
        } else {
          alert("server connection error");
        }
      }, 
      error => {
      console.log(error);
      })
  }

  nextquestion(answer) {
      if (!this.loading) {
          if (this.batch_size === this.batch_calculate) {
            this.batch_calculate = 0;
            this.router.navigateByUrl("tab/(question:question)");
          } else {
              console.log(this.question_id);
              const headers = new HttpHeaders();
              headers.set('Content-Type', 'application/json');
              this.loading = true;
              this.http.get('http://192.168.0.70:8100/api/next_question?email='+this.email+'&question_id='+this.question_id+'&answer='+answer, {headers: headers}).subscribe(data => {
                console.log(data);
                if (data['result'] == 'success') {
                  this.question = data['question'].questions
                  this.question_id =  data['question'].id;
                  this.loading = false;
                  this.batch_calculate = this.batch_calculate + 1;
                  this.userData.set_complete_question_id(data['question'].id);
                } else {
                  this.loading = false;
                  alert("connection error")
                }
              }, 
              error => {
              console.log(error);
              this.loading = false;
              })
            }
      } else {
        console.log(this.loading, "loading");
      }
      // clearTimeout(this.timerId);
      this.previous_button = true;
      // this.timerId = setTimeout( () => {
      //   this.previous_button = false;
      // }, 5000);
  }

  previous_question() {
    console.log("previosdu quesitohj")
      this.previous_button = false;
      this.question_id = this.question_id -2;
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.loading = true;
      this.http.get('http://192.168.0.70:8100/api/next_question?email='+this.email+'&question_id='+this.question_id+'&answer=neither', {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success') {
          this.question = data['question'].questions
          this.question_id =  data['question'].id;
          this.loading = false;
          this.batch_calculate = this.batch_calculate + 1;
          this.userData.set_complete_question_id(data['question'].id);
        } else {
          this.loading = false;
          alert("connection error")
        }
      }, 
      error => {
      console.log(error);
      this.loading = false;
      })
  }


  swipeAll(event: any): any {
    console.log('Swipe All', event);
}

swipeLeft(event: any): any {
    console.log('Swipe Left', event);
}

swipeRight(event: any): any {
    console.log('Swipe Right', event);
}

swipeUp(event: any): any {
    console.log('Swipe Up', event);
}

swipeDown(event: any): any {
    console.log('Swipe Down', event);
} 
swipe(event) {
  console.log('Swipe Down', event);
  if(event.direction === 2) {
    console.log('Swipe Down', event);
  }
  if(event.direction === 4) {
    console.log('Swipe Dowasdfsan', event);
  }
}

}
