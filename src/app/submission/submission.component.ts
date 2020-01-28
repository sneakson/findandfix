import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  encore(){
    this.router.navigate(['report']);
  }
  
}
