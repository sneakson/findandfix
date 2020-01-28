import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuginfoComponent} from './buginfo/buginfo.component';
import {SubmissionComponent} from './submission/submission.component';

const routes: Routes = [
  {path: '', component: BuginfoComponent },
  { path: 'thankyou', component: SubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
