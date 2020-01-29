import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BugReport} from '../buglist/bugreport.model';
import {BugListService} from '../buglist/buglist.service';
import { MatChipsModule } from '@angular/material';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  private bugReport: BugReport;

  constructor(
    private router: ActivatedRoute,
    private reportService: BugListService
  ) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe( params => {
      this.bugReport = this.reportService.getBugReports().find(report => {
        return report.id == params.get('reportId');
      });
    });
  }

}
