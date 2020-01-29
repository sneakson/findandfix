import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuginfoComponent} from './buginfo/buginfo.component';
import {SubmissionComponent} from './submission/submission.component';
import { BuglistComponent } from './buglist/buglist.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';

const routes: Routes = [
  { path: '', component: BuglistComponent },
  { path: 'report', component: BuginfoComponent },
  { path: 'thankyou', component: SubmissionComponent },
  { path: 'details/:reportId', component: BugDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
