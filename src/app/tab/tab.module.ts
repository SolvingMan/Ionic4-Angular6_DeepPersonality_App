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
import { AddpermissionPageModule } from '../permissions/addpermission/addpermission.module'
import { RevokepermissionPageModule } from '../permissions/revokepermission/revokepermission.module';
import { PermissioncodePageModule }  from '../permissions/permissioncode/permissioncode.module';
import { UsercomparisonPageModule } from '../comparison/usercomparison/usercomparison.module';
import { NotificationPageModule } from '../settings/notification/notification.module';
import { DemographicsPageModule } from '../settings/demographics/demographics.module';

import { QuestionPage } from '../question/question.page';
import { ProfilePage } from '../profile/profile.page';
import { PermissionsPage }  from '../permissions/permissions.page';
import { SettingsPage } from '../settings/settings.page';
import { ComparisonPage } from '../comparison/comparison.page';
import { AddpermissionPage } from '../permissions/addpermission/addpermission.page';
import { RevokepermissionPage } from '../permissions/revokepermission/revokepermission.page';
import { PermissioncodePage } from '../permissions/permissioncode/permissioncode.page';
import { UsercomparisonPage } from '../comparison/usercomparison/usercomparison.page';
import { DemographicsPage } from '../settings/demographics/demographics.page';
import { NotificationPage } from '../settings/notification/notification.page';

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
        path: 'addpermission',
        outlet: 'permissions',
        component: AddpermissionPage,
      },
      {
        path: 'revokepermission',
        outlet: 'permissions',
        component: RevokepermissionPage,
      },
      {
        path: 'permissioncode',
        outlet: 'permissions',
        component: PermissioncodePage,
      },
      {
        path: 'comparison',
        outlet: 'comparison',
        component: ComparisonPage,
      },
      {
        path: 'usercomparison/:index',
        outlet: 'comparison',
        component: UsercomparisonPage,
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage,
      },
      {
        path: 'notification',
        outlet: 'settings',
        component: NotificationPage,
      },
      {
        path: 'demographics',
        outlet: 'settings',
        component: DemographicsPage,
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
    AddpermissionPageModule,
    RevokepermissionPageModule,
    PermissioncodePageModule,
    UsercomparisonPageModule,
    NotificationPageModule,
    DemographicsPageModule,
    RouterModule.forChild(routes),    
  ],
  declarations: [TabPage],
  exports: [RouterModule]
})
export class TabPageModule {}
