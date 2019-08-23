import {Component} from '@angular/core';
import {NavController, App, LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ToastController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';
import {AuthProvider} from "../../providers/auth/auth";
import firebase from 'firebase';
import {ImagePicker} from '@ionic-native/image-picker';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    loading: any;
    BaseUrl: string = "https://homeserviceapps.com/freedomjobs/";

    data = {
        'fullName': '',
        'employeeNumber': '',
        'email': '',
        'jDate': '',
        'jobNumber': '',
        'callType': '',
        'custName': '',
        'custEmail': '',
        'custPhone': '',
        'custStreet': '',
        'custCity': '',
        'custState': '',
        'custZip': '',
        'jobDesc': '',
        'review': true,
        'timeIn': '',
        'timeOut': '',
        'jobCompensation': '',
        'turnOver': true,
        'turnOverWhom': '',
        'revAmt': '',
        'paymentMethod': '',
        'custType': '',
        'equipmentAge': '',
        'agreementList': '',
        'estimateSent': true,
        'estimateReco': '',
        'estimateApproved': true,
        'productReco': '',
        'images': '',
    };
    selectedImages = [];
    selectedImageFiles = [];
    currentuid;

    constructor(public navCtrl: NavController,
                private storage: Storage,
                public toastCtrl: ToastController,
                public app: App,
                public http: HttpClient,
                public loadingCtrl: LoadingController,
                private imagePicker: ImagePicker,
                private camera: Camera,
                public authProvider: AuthProvider) {
    }

    ionViewWillEnter() {
        this.currentuid = firebase.auth().currentUser.uid;
        this.loadUserData();
        // this.loadJobData();
    }

    loadJobData() {
        this.authProvider.getJob(this.currentuid)
            .first()
            .subscribe((job) => {
                console.log('job >>', job);

                if (job) {
                    for (let key in this.data) {
                        this.data[key] = job[key];
                    }
                } else {
                    this.loadUserData();
                }
            });
    }

    loadUserData() {
        this.authProvider.getUser(this.currentuid)
            .first()
            .subscribe((user) => {
                console.log('user >>', user)

                if (user) {
                    this.data.fullName = user.fullName;
                    this.data.employeeNumber = user.employeeNumber;
                    this.data.email = user.email;
                }
            });
    }

    logout() {
        // Api Token Logout
        const root = this.app.getRootNav();
        root.popToRoot();
    }

    async presentToast(text) {
        const toast = await this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });

        toast.present().then(res => res);
    }

    async getData(key) {
        const keyVal = await this.storage.get(key);
        if (keyVal) {
            this.data.fullName = keyVal.fullName;
            this.data.employeeNumber = keyVal.employeeNumber;
            this.data.email = keyVal.email;
        } else {
            this.data.fullName = '';
            this.data.employeeNumber = '';
            this.data.email = '';
        }
    }

    sendData() {
        this.post('scheduledMail.php', {}).subscribe(res => {
            console.log(res);
        }, error => {
            this.presentToast(error);
            console.error('error:', error)
        });
    }

    public post(url, body): Observable<string[]> {
        this.showLoader();

        const formData = new FormData();

        if (this.selectedImageFiles) {
            this.selectedImageFiles.forEach((file) => {
                formData.append('attachmentPicture[]', file);
            });
        }

        for (let key in this.data) {
            formData.append(key, this.data[key]);
        }

        console.log('form data >>', formData);

        return this.http.post(this.BaseUrl + url, formData)
        // @ts-ignore
            .map((res: any) => {
                console.log('api res >>', res);

                if (res.data) {
                    this.selectedImages = [];
                    this.selectedImageFiles = [];
                    this.data.images = res.data;
                }

                return res;
            })
            .finally(async () => {
                console.log('final fire store:', this.data)
                await this.authProvider.addJobs(this.data).then((res) => {
                    this.data = {
                        'fullName': '',
                        'employeeNumber': '',
                        'email': '',
                        'jDate': '',
                        'jobNumber': '',
                        'callType': '',
                        'custName': '',
                        'custEmail': '',
                        'custPhone': '',
                        'custStreet': '',
                        'custCity': '',
                        'custState': '',
                        'custZip': '',
                        'jobDesc': '',
                        'review': true,
                        'timeIn': '',
                        'timeOut': '',
                        'jobCompensation': '',
                        'turnOver': true,
                        'turnOverWhom': '',
                        'revAmt': '',
                        'paymentMethod': '',
                        'custType': '',
                        'equipmentAge': '',
                        'agreementList': '',
                        'estimateSent': true,
                        'estimateReco': '',
                        'estimateApproved': true,
                        'productReco': '',
                        'images': '',
                    };
                    this.selectedImages = [];
                    this.selectedImageFiles = [];
                    this.presentToast('Job create successfully');
                    this.loadUserData();
                }).catch((err) => {
                    console.log(err);
                });
                this.hideLoader();
            })
            .catch(this.handleError);
    }

    public handleError(error: Response | any) {
        console.error('ApiService::handleError', error.error.error);
        return Observable.throw(error.error.error);
    }

    showLoader() {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: "Please wait...",
                // dismissOnPageChange: true
            });
        }
        this.loading.present();
    }

    hideLoader() {
        if (this.loading) {
            try {
                this.loading.dismiss();
            } catch (exception) {

            }
            this.loading = null;
        }
    }

    async pickImages() {
        const options = {
            maximumImagesCount: 5,
            outputType: 1,
            quality: 1
        };

        try {
            const hasPem = await this.imagePicker.hasReadPermission();

            if (hasPem) {
                const images = await this.imagePicker.getPictures(options);
                this.selectedImages = this.selectedImages.concat(images);
            } else {
                await this.imagePicker.requestReadPermission();
                const images = await this.imagePicker.getPictures(options);
                this.selectedImages = this.selectedImages.concat(images);
            }

            if (this.selectedImages && this.selectedImages.length > 0) {
                const images = this.selectedImages.map((img, index) => {
                    return this.dataURLtoFile('data:image/png;base64,' + img, `img${index}.png`);
                });
                this.selectedImageFiles = this.selectedImageFiles.concat(images);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async openCamera() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        const imageData = await this.camera.getPicture(options);
        this.selectedImages.push(imageData);
        this.selectedImageFiles.push(this.dataURLtoFile('data:image/png;base64,' + imageData, `img.png`));
    }

    dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }
}
