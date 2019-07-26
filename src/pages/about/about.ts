import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import firebase from "firebase";
import {AuthProvider} from "../../providers/auth/auth";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Welcome} from "../welcome/welcome";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  fullName: any;
  employeeNumber: any;
  email: any;
  userPass: any;
  passwordType = 'password';
  passwordIcon = 'eye-off';
  currentuid: any;
  updateUserError: string;
  form: FormGroup;
  keyId: any;

  constructor(public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController,
              public authProvider: AuthProvider, public fb: FormBuilder) {
      this.form = fb.group({
          name: ['', Validators.compose([Validators.required])],
          employeeNumber: ['', Validators.compose([Validators.required])],
          email: ['', Validators.compose([Validators.required, Validators.email])],
      });

  }

    ionViewWillEnter() {
        this.currentuid = firebase.auth().currentUser.uid;
        this.authProvider.getUser(this.currentuid)
            .first()
            .subscribe((user) => {
                if (user) {
                    this.form = this.fb.group({
                        name: [user ? user.fullName : '', Validators.compose([Validators.required])],
                        employeeNumber: [user ? user.employeeNumber : '', Validators.compose([Validators.required])],
                        email: [user ? user.email : '', Validators.compose([Validators.required, Validators.email])],
                    });
                }
            });

    }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  updateUser(){
      this.authProvider.updateUsers(this.form.value).then((res: any) => {
          if(res.success){
              this.presentToast('Update successfully.');
          }
      });
  }

    logout() {
        this.authProvider.signOut();
        this.navCtrl.setRoot(Welcome);
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
