import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnswerPage } from './answer.page';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

const routes: Routes = [
  {
    path: '',
    component: AnswerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSwipeAllModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnswerPage]
})
export class AnswerPageModule {}
