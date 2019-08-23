import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/of';

@Injectable()
export class FirebaseJobsData {
    data: any;

    constructor(
        private http: HttpClient
    ) {}

    load(): any {
        let timeStamp = +new Date();
        return this.http.get('https://freedomjobs-396a3.firebaseio.com/jobs.json?tsp=' + timeStamp,);
    }    

    getJobs() {
        return this.load().map((data: any) => {
            return data;
        });
    }

}