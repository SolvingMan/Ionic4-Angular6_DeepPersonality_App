import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PermissioncodePage } from './permissioncode.page';

const routes: Routes = [
  {
    path: '',
    component: PermissioncodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PermissioncodePage]
})
export class PermissioncodePageModule {}
