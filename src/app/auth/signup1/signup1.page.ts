import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  notification: string;
  notifi_setting: string;
  batch: string;
  start_time: string;
  constructor() { 
    this.notification = 'empty';
    this.notifi_setting = 'empty';
    this.batch = 'empty';
  }


  ngOnInit() {
  }

}
