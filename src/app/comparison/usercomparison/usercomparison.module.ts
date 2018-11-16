import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsercomparisonPage } from './usercomparison.page';

const routes: Routes = [
  {
    path: '',
    component: UsercomparisonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsercomparisonPage]
})
export class UsercomparisonPageModule {}
