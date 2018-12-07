import { Component } from '@angular/core';

import { Platform, Events, Datetime } from '@ionic/angular';
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
    private statusBar: StatusBar,
    public events: Events,

  ) {
    this.initializeApp();
    events.subscribe('user:theme_color', (theme_color) => {
      console.log('theme_color is', theme_color);
      if (theme_color === 'dark' ) {
        this.themeClass = 'theme-clover';
      }
      else {
        this.themeClass = 'theme-noir';
      }
    });
    this.themes = [
      // { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
      { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
      // { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
    ];
    this.themeClass = 'theme-clover';
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    //   Notification.requestPermission().then(function(result) {
    //     console.log(result);
    //     setInterval(()=> {
    //       var notification = new Notification("Hi there!");
    //     },5000)
    //   });
    });
  }
}
