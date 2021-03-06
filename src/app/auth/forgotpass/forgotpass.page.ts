import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDataService } from '../../provider/user-data.service';
import { AlertController, Events } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  email: string;

  constructor(
    public router: Router, 
    private http: HttpClient,
    private alertCtrl: AlertController,  
  ) {
    this.email= '';
   }

  ngOnInit() {
  }

  sendmail() {
    if (this.email == '') {
      this.alertshow("Please insert Email");
    } else {
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json');

      this.http.get('https://cors-anywhere.herokuapp.com/http://www.deepperson.net/api/forgotpass?email='+this.email, {headers: headers}).subscribe(data => {
        console.log(data);
        if (data['result'] == 'success' ) {

          this.router.navigateByUrl("/loginpage");
        }
        else {
          this.alertshow("Email is not exist");
        }
      }, 
      error => {
      console.log(error);
      })     
    }
  }


  async alertshow(msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {}
        }
      ]
    });
    await alert.present();
  }

}
