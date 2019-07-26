import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  email: any;
  userPass: any;
    loginForm: FormGroup;
    loginError: string;


    constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams,
                public toastCtrl: ToastController, fb: FormBuilder, private auth: AuthProvider) {
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
      let data = this.loginForm.value;

      if (!data.email) {
          return;
      }

      let credentials = {
          email: data.email,
          password: data.password
      };
      this.auth.signInWithEmail(credentials)
          .then(
              (result) => {
                  console.log('result', result)
                  this.navCtrl.setRoot(TabsPage)
              },
              error => this.loginError = error.message
          );
  }

  /*login(){
    //Api connections
    this.getData('userInfo');
  }
*/

  
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
        message: text,
        duration: 3000,
        position: 'bottom'
    });
    toast.present().then(res => res);
  }  

}
