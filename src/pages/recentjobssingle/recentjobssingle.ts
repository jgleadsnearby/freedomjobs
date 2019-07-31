import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FirebaseJobsData} from '../../providers/jobs/firebase-jobs-data';

@Component({
    selector: 'page-recentjobssingle',
    templateUrl: 'recentjobssingle.html',
})
export class RecentjobssinglePage {

    job;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public firebasejobsData: FirebaseJobsData
    ) {
        this.job = this.navParams.get('job');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RecentjobssinglePage');
        console.log('job >>', this.job);
    }

}
