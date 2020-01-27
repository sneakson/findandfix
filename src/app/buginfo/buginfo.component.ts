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
      summary: '',
      application: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.bugInfoForm);
  }
}
