import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BugInfo } from './buginfo.model';
import { BugInfoFormGroup } from './buginfo.form';
import { BugListService } from '../buglist/buglist.service'
import { BugReport } from '../buglist/bugreport.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buginfo',
  templateUrl: './buginfo.component.html',
  styleUrls: ['./buginfo.component.css'],
  host: {
    class: 'app-buginfo'
  }
})
export class BuginfoComponent implements OnInit {

  private bugInfoForm: FormGroup;

  constructor(
    private formGroup: BugInfoFormGroup,
    private bugService: BugListService,
    private router: Router ) {
    this.bugInfoForm = formGroup.getFormGroup();
  }

  ngOnInit() {
  }

  public submit(bugInfo: BugInfo) {
    console.log(bugInfo);
    this.bugInfoForm.reset();
    this.bugService.create(new BugReport(bugInfo));
    this.router.navigate(['thankyou']);
  }
}
