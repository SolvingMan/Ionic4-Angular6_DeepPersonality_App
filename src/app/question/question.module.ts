import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuestionPage } from './question.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: QuestionPage }])
  ],
  declarations: [QuestionPage]
})
export class QuestionPageModule {}
