import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buginfo',
  templateUrl: './buginfo.component.html',
  styleUrls: ['./buginfo.component.css']
})
export class BuginfoComponent implements OnInit {

  private bugInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bugInfoForm = this.formBuilder.group({
      name: '',
      email: '',
      summary: '',
      application: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  submit(bugInfo: FormGroup) {
    console.log(bugInfo);
    window.alert(`Thank you ${bugInfo.name} for your bug report on the ${bugInfo.application} application!
We hope to resolve your issue as soon as we can.`);
    this.bugInfoForm.reset();
  }
}
