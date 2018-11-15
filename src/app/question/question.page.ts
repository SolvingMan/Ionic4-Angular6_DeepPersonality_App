import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
 questions : any[];
 state: any = 0;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    
    this.questions =[
      {
        text: "this is  test?" 
      },
      {
        text: "this is  test1?" 
      },  
      {
        text: "this is  test2?" 
      },  
      {
        text: "this is  test3?" 
      },  
      {
        text: "this is  test4?" 
      },  
      {
        text: "this is  test5?" 
      },  
      {
        text: "this is  test6?" 
      },  
      {
        text: "this is  test7?" 
      },
    ]
   }

  ngOnInit() {
    // this.activateRoute.queryParams.subscribe((index) => {
    //   alert(index)
    //   this.state = index;
    // })
  }
  nextquestion() {
    this.router.navigateByUrl("/profile");
  }

}
