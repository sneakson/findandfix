import { Component, OnInit } from '@angular/core';
import { BugReport } from './bugreport.model';
import { BugListService } from './buglist.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent implements OnInit {

  bugReports: BugReport[];
  displayedColumns: string[] = ['summary', 'application', 'reporter'];
  dataSource: MatTableDataSource<BugReport>;

  constructor(private bugService: BugListService) { 

  }

  ngOnInit() {
    console.log("blc.ngOnInit");
    console.log(this.bugReports);
    this.bugReports = this.bugService.getBugReports();
    this.dataSource = new MatTableDataSource(this.bugReports);
  }

}
