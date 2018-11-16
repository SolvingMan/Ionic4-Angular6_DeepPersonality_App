import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  swipe : string;
  theme_type : string;
  theme_color : string;
  constructor() { 
    this.swipe = "swipe";
    this.theme_type = "static";
    this.theme_color = "light";
  }

  ngOnInit() {
  }

}
