import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDataService } from '../provider/user-data.service';
import { resolve } from 'path';
import { JsonPipe } from '@angular/common';

import { NavController, Datetime, Events } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
  data: any;
  previous_button: boolean;
  batch_calculate : number;
  batch_size : number;
  swipe_status: string;
  answer: string;

  timerId : any;
  

  constructor(
    public router: Router, 
    private http: HttpClient,
    public navCtrl: NavController,  
    public events: Events,
    public userData: UserDataService
  ) {
    this.email = '';
    this.question = '';
    this.loading = false;
    this.question_id = 10;
    this.batch_calculate = 0;
    events.subscribe('add_permission', (status) => {
      this.swipe_status = status;
    })
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
      this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/start_question?email='+this.email+'&question_id='+this.question_id, {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success') {
          this.question = data['question'].questions;
          this.swipe_status = data['user'].swipe;
        } else {
          // alert("server connection error");
        }
      }, 
      error => {
      console.log(error);
      })
  }

  nextquestion(answer) {
      this.answer = answer;
      if (!this.loading) {
          if (this.batch_size <= this.batch_calculate) {
            this.batch_calculate = 0;
            this.events.publish('batch_anwer_done', this.email);
            this.router.navigateByUrl("tab/(question:question)");
          } else {
              console.log(this.question_id);
              const headers = new HttpHeaders();
              headers.set('Content-Type', 'application/json');
              this.loading = true;
              this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/next_question?email='+this.email+'&question_id='+this.question_id+'&answer='+this.answer, {headers: headers}).subscribe(data => {
                console.log(data);
                if (data['result'] == 'success') {
                  this.question = data['question'].questions
                  this.question_id =  data['question'].id;
                  this.loading = false;
                  this.batch_calculate = this.batch_calculate + 1;
                  this.userData.set_complete_question_id(data['question'].id);
                } else {
                  this.loading = false;
                  // alert("connection error")
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
      clearTimeout(this.timerId);
      this.previous_button = true;
      this.timerId = setTimeout( () => {
        this.previous_button = false;
      }, 5000);
  }

  previous_question() {
      console.log("previous question")
      this.previous_button = false;
      this.question_id = this.question_id -2;
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');
      this.loading = true;
      this.http.get('https://cors-anywhere.herokuapp.com/http://onemoretest.co/api/next_question?email='+this.email+'&question_id='+this.question_id+'&answer=neither', {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success') {
          this.question = data['question'].questions
          this.question_id =  data['question'].id;
          this.loading = false;
          // this.batch_calculate = this.batch_calculate - 1;
          this.userData.set_complete_question_id(data['question'].id);
        } else {
          this.loading = false;
          // alert("connection error")
        }
      }, 
      error => {
      console.log(error);
      this.loading = false;
      })
  }


  swipe(event) {
    // debugger;
    console.log(this.swipe_status);
    if (this.swipe_status !== "disable") {
      if(event.direction === 2) {
        console.log('right to left');
        this.answer = "agree";
      }
      if(event.direction === 4) {
        console.log('left to right');
        this.answer = "disagree";
      }
      console.log(event.direction);
      this.nextquestion(this.answer);
    }
  }

}
