import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuginfoComponent } from './buginfo/buginfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { MatOptionModule} from '@angular/material';
import { BugInfoFormGroup } from './buginfo/buginfo.form';

@NgModule({
  declarations: [
    AppComponent,
    BuginfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    BugInfoFormGroup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
