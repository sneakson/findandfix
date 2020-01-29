import { BugInfo } from '../buginfo/buginfo.model';

export class BugReport {

    id: number;
    reporter: string = 'name';
    email: string = 'email';
    summary: string = 'summary';
    application: string = 'application';
    description: string = 'description';
    status: string = 'NEW';

    constructor(bugInfo: BugInfo){
        this.reporter = bugInfo.name;
        this.email = bugInfo.email;
        this.summary = bugInfo.summary;
        this.application = bugInfo.application;
        this.description = bugInfo.description;
    }

}
