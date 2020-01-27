import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class BugInfoFormGroup {
    constructor(private formBuilder: FormBuilder){
        
    }

    getFormGroup(): FormGroup {
        return this.formBuilder.group({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
        summary: new FormControl('', Validators.required),
        application: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
        });
  }
}