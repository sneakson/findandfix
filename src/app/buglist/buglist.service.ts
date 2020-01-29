import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BugReport } from './bugreport.model';

@Injectable({
    providedIn: 'root'
})
export class BugListService {
    reports: BugReport[] = [];

    constructor( private httpClient: HttpClient ){

    }

    ngOnInit(){

    }

    public create(report: BugReport) {
        //temp while no db, populate the id by hand
        let largestId = Math.max(...this.reports.map( report => {
          return report.id;
        }));

        largestId = largestId === -Infinity ? -1 : largestId;

        report.id = largestId + 1;

        //create
        this.reports.push(report);
        console.log(this.reports);
    }

    public getBugReports(): BugReport[] {
        //return this.httpClient.get('/assets/shipping.json');
        return this.reports;
    }

}
