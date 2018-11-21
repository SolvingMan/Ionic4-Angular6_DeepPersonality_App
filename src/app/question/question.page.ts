import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDataService } from '../provider/user-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
 questions : any[];
 state: any = 0;
 text: string;
 flag: boolean;

  constructor(
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    public userData: UserDataService
  ) {
   this.text = "Start answer";  
   this.flag = false;
  }

  async ngOnInit() {
    
   
  }

  start(){
   
    this.router.navigateByUrl("/answer");
    setTimeout( () => {
      this.text = "Continue answer";  
    }, 5000);

 
                
    // this.router.navigateByUrl("tab/(question:question)")
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json');
    // this.http.post('http://192.168.0.70:8100/api/user/login',this.user, {headers: headers}).subscribe(data => {
    // console.log(data);
    // }, 
    // error => {
    // console.log(error);
    // })
  }
}
