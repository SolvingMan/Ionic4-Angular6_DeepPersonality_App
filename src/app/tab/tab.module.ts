import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { TabPage } from './tab.page';

import { QuestionPageModule } from '../question/question.module';
import { ProfilePageModule } from '../profile/profile.module';
import { PermissionsPageModule }  from '../permissions/permissions.module';
import { ComparisonPageModule } from '../comparison/comparison.module';
import { SettingsPageModule } from '../settings/settings.module';

import { QuestionPage } from '../question/question.page';
import { ProfilePage } from '../profile/profile.page';
import { PermissionsPage }  from '../permissions/permissions.page';
import { SettingsPage } from '../settings/settings.page';
import { ComparisonPage } from '../comparison/comparison.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'question',
        outlet: 'question',
        component: QuestionPage,
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage,
      },
      {
        path: 'permissions',
        outlet: 'permissions',
        component: PermissionsPage,
      },
      {
        path: 'comparison',
        outlet: 'comparison',
        component: ComparisonPage,
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage,
      },

    ]
  },
  {
    path: '',
    redirectTo: '/tab/(question:question)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPageModule,
    ProfilePageModule,
    PermissionsPageModule,
    ComparisonPageModule,
    SettingsPageModule,
    RouterModule.forChild(routes),    
  ],
  declarations: [TabPage],
  exports: [RouterModule]
})
export class TabPageModule {}
