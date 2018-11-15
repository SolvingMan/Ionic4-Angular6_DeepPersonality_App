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
 text: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
   this.text = "Start answer";  
  }

  ngOnInit() {
    // this.activateRoute.queryParams.subscribe((index) => {
    //   alert(index)
    //   this.state = index;
    // })
  }
  nextquestion() {
    this.router.navigateByUrl("/answer");
  }
  start(){
    console.log("start event is here")
    if (this.text==="Start answer") {
      this.text = "Continue answer";
    }
    else {
      this.text = "Start answer"
    }
  }
}
