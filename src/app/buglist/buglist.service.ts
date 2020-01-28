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
        this.reports.push(report);
    }

    public getBugReports(): BugReport[] {
        //return this.httpClient.get('/assets/shipping.json');
        return this.reports;
    }

}