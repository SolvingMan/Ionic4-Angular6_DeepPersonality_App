import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: './index/login.module#LoginPageModule' },
  { path: 'loginpage', loadChildren: './auth/loginpage/loginpage.module#LoginpagePageModule' },
  { path: 'signuppage', loadChildren: './auth/signuppage/signuppage.module#SignuppagePageModule' },
  { path: 'signup1', loadChildren: './auth/signup1/signup1.module#Signup1PageModule' },
  { path: 'signup2', loadChildren: './auth/signup2/signup2.module#Signup2PageModule' },
  // { path: 'question', loadChildren: './question/question.module#QuestionPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  // { path: 'permissions', loadChildren: './permissions/permissions.module#PermissionsPageModule' },

  { path: 'answer', loadChildren: './answer/answer.module#AnswerPageModule' },
  { path: '', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'usercomparison', loadChildren: './comparison/usercomparison/usercomparison.module#UsercomparisonPageModule' },
  { path: 'forgotpass', loadChildren: './auth/forgotpass/forgotpass.module#ForgotpassPageModule' },
  // { path: 'notification', loadChildren: './settings/notification/notification.module#NotificationPageModule' },
  // { path: 'demographics', loadChildren: './settings/demographics/demographics.module#DemographicsPageModule' },
  // { path: 'addpermission', loadChildren: './permissions/addpermission/addpermission.module#AddpermissionPageModule' },
  // { path: 'revokepermission', loadChildren: './permissions/revokepermission/revokepermission.module#RevokepermissionPageModule' },
  // { path: 'permissioncode', loadChildren: './permissions/permissioncode/permissioncode.module#PermissioncodePageModule' },
  // { path: 'comparison', loadChildren: './comparison/comparison.module#ComparisonPageModule' },
  // { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
