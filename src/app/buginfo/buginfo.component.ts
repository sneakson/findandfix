import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BugInfo } from './buginfo.model';
import { BugInfoFormGroup } from './buginfo.form';

@Component({
  selector: 'app-buginfo',
  templateUrl: './buginfo.component.html',
  styleUrls: ['./buginfo.component.css']
})
export class BuginfoComponent implements OnInit {

  private bugInfoForm: FormGroup;

  constructor(private formGroup: BugInfoFormGroup) {
    this.bugInfoForm = formGroup.getFormGroup();
  }

  ngOnInit() {
  }

  public submit(bugInfo: BugInfo) {
    console.log(bugInfo);
    window.alert(`Thank you ${bugInfo.name} for your bug report on the ${bugInfo.application} application!
We hope to resolve your issue as soon as we can.`);
    this.bugInfoForm.reset();
  }
}
