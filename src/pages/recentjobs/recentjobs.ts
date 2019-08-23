import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ToastController, Refresher} from 'ionic-angular';
import {FirebaseJobsData} from '../../providers/jobs/firebase-jobs-data';
import {RecentjobssinglePage} from "../recentjobssingle/recentjobssingle";

@Component({
    selector: 'page-recentjobs',
    templateUrl: 'recentjobs.html',
})
export class RecentJobs {

    jobs: any = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public firebasejobsData: FirebaseJobsData,
        public toastCtrl: ToastController,
    ) {
    }

    ionViewWillEnter() {
        console.log('ionViewDidLoad RecentjobsPage');
        this.updateJobs();
    }

    updateJobs() {
        this.firebasejobsData.getJobs().subscribe((jobs) => {
            this.jobs = Object.keys(jobs).map(key => jobs[key]);
            console.log('jobs >>>', this.jobs)
        });
    }

    doRefresh(refresher: Refresher) {
        console.log(this.jobs);
        setTimeout(() => {
            this.updateJobs();
            refresher.complete();

            const toast = this.toastCtrl.create({
                message: 'Jobs list has been updated.',
                duration: 3000
            });
            toast.present();
        }, 1000);
    }

    viewJob(job) {
        console.log('selected job >>', job);
        this.navCtrl.push(RecentjobssinglePage, {job});
    }

}
