import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findandfix';

  constructor(private router: Router) {

  }

  public route(route: String){
    this.router.navigate([route]);
  }
}
