import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuginfoComponent} from './buginfo/buginfo.component';

const routes: Routes = [
  {path: '', component: BuginfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
