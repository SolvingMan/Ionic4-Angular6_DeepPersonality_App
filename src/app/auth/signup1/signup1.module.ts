import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Signup1Page } from './signup1.page';

const routes: Routes = [
  {
    path: '',
    component: Signup1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Signup1Page],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ // <----this is needed
    Signup1Page
  ]
})
export class Signup1PageModule {}
