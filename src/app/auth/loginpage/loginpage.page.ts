import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
  questionpage() {
    console.log('sdf')
    this.router.navigateByUrl('tab/(question:question)');
  }

}
