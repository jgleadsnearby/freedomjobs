import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseJobsData } from '../../providers/jobs/firebase-jobs-data';

/**
 * Generated class for the RecentjobssinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recentjobssingle',
  templateUrl: 'recentjobssingle.html',
})
export class RecentjobssinglePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public firebasejobsData: FirebaseJobsData
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentjobssinglePage');
  }

}
