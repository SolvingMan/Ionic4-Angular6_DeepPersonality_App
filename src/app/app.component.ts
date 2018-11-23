import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  themeClass: any;
  themes: Array<{title: string, theme: string,color: string}>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.themes = [
      // { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
      { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
      // { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
    ];
    this.themeClass = 'theme-noir';
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
