import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import firebase from 'firebase';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  fullName: any;
  employeeNumber: any;
  email: any;
  userPass: any;
  passwordType = 'password';
  passwordIcon = 'eye-off';

    signupError: string;
    form: FormGroup;


    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
                public toastCtrl: ToastController, fb: FormBuilder, public auth: AuthProvider) {
        this.form = fb.group({
            name: ['', Validators.compose([Validators.required])],
            employeeNumber: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

    signup() {
        let data = this.form.value;
        let credentials = {
            email: data.email,
            password: data.password
        };
        try {
        const result = this.auth.signUp(credentials).then(
            (success) => {
                const userDatabase: firebase.database.Reference = firebase.database().ref('/users/' + success.user.uid );
                userDatabase.set({
                    id: success.user.uid,
                    fullName: data.name,
                    email: data.email,
                    employeeNumber: data.employeeNumber
                });
                this.navCtrl.setRoot(Login)
            },
            error => this.signupError = error.message
        );
        }
        catch(e) {
            console.error(e);
            alert(e.message);
        }
    }

    async presentToast(text) {
      const toast = await this.toastCtrl.create({
          message: text,
          duration: 3000,
          position: 'bottom'
      });
      toast.present().then(res => res);
    }

}
