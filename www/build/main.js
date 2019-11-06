webpackJsonp([3],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recentjobs_recentjobs__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__recentjobs_recentjobs__["a" /* RecentJobs */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Create Job" tabIcon="copy"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Project Feed" tabIcon="md-clipboard"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="My Account" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseJobsData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/of';
var FirebaseJobsData = (function () {
    function FirebaseJobsData(http) {
        this.http = http;
    }
    FirebaseJobsData.prototype.load = function () {
        var timeStamp = +new Date();
        return this.http.get('https://freedomjobs-396a3.firebaseio.com/jobs.json?tsp=' + timeStamp);
    };
    FirebaseJobsData.prototype.getJobs = function () {
        return this.load().map(function (data) {
            return data;
        });
    };
    FirebaseJobsData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseJobsData);
    return FirebaseJobsData;
}());

//# sourceMappingURL=firebase-jobs-data.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams, storage, toastCtrl, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.form = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            employeeNumber: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    Signup.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        try {
            var result = this.auth.signUp(credentials).then(function (success) {
                var userDatabase = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users/' + success.user.uid);
                userDatabase.set({
                    id: success.user.uid,
                    fullName: data.name,
                    email: data.email,
                    employeeNumber: data.employeeNumber
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
            }, function (error) { return _this.signupError = error.message; });
        }
        catch (e) {
            console.error(e);
            alert(e.message);
        }
    };
    Signup.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present().then(function (res) { return res; });
                        return [2 /*return*/];
                }
            });
        });
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="signup()" [formGroup]="form">\n\n    <ion-list inset>\n\n\n\n      <ion-item [ngClass]="{ invalid: nameErrors.hasError(\'*\', [\'touched\']) }">\n\n        <ion-input type="text" placeholder="Full Name" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="name" #nameErrors="ngxErrors">\n\n        <div [ngxError]="[\'name\', \'required\']" [when]="[\'touched\']">It should be a valid name</div>\n\n      </div>\n\n\n\n      <ion-item [ngClass]="{ invalid: employeeErrors.hasError(\'*\', [\'touched\']) }">\n\n        <ion-input type="text" placeholder="Employee Number" formControlName="employeeNumber"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="employeeNumber" #employeeErrors="ngxErrors">\n\n        <div [ngxError]="[\'employeeNumber\', \'required\']" [when]="[\'touched\']">It should be a valid employee Number</div>\n\n      </div>\n\n\n\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n        <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n\n      </div>\n\n\n\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <div padding-horizontal>\n\n      <div class="form-error">{{signupError}}</div>\n\n\n\n      <button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		737,
		2
	],
	"../pages/signup/signup.module": [
		738,
		1
	],
	"../pages/welcome/welcome.module": [
		739,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AboutPage = (function () {
    function AboutPage(navCtrl, storage, toastCtrl, authProvider, fb) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.fb = fb;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.form = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])],
            employeeNumber: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email])],
        });
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.currentuid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.authProvider.getUser(this.currentuid)
            .first()
            .subscribe(function (user) {
            if (user) {
                _this.form = _this.fb.group({
                    name: [user ? user.fullName : '', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])],
                    employeeNumber: [user ? user.employeeNumber : '', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required])],
                    email: [user ? user.email : '', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email])],
                });
            }
        });
    };
    AboutPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    AboutPage.prototype.updateUser = function () {
        var _this = this;
        this.authProvider.updateUsers(this.form.value).then(function (res) {
            if (res.success) {
                _this.presentToast('Update successfully.');
            }
        });
    };
    AboutPage.prototype.logout = function () {
        this.authProvider.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* Welcome */]);
    };
    AboutPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present().then(function (res) { return res; });
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n\n    <ion-title>My Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="updateUser()" [formGroup]="form">\n\n        <ion-list inset>\n\n\n\n            <ion-item [ngClass]="{ invalid: nameErrors.hasError(\'*\', [\'touched\']) }">\n\n                <ion-input type="text" placeholder="Full Name" formControlName="name"></ion-input>\n\n            </ion-item>\n\n\n\n            <div ngxErrors="name" #nameErrors="ngxErrors">\n\n                <div [ngxError]="[\'name\', \'required\']" [when]="[\'touched\']">It should be a valid name</div>\n\n            </div>\n\n\n\n            <ion-item [ngClass]="{ invalid: employeeErrors.hasError(\'*\', [\'touched\']) }">\n\n                <ion-input type="text" placeholder="Employee Number" formControlName="employeeNumber"></ion-input>\n\n            </ion-item>\n\n\n\n            <div ngxErrors="employeeNumber" #employeeErrors="ngxErrors">\n\n                <div [ngxError]="[\'employeeNumber\', \'required\']" [when]="[\'touched\']">It should be a valid employee Number</div>\n\n            </div>\n\n\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="Email" [readonly]="true" formControlName="email"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <div padding-horizontal>\n\n            <div class="form-error">{{updateUserError}}</div>\n\n\n\n            <button ion-button full color="primary" type="submit" [disabled]="!form.valid">Update</button>\n\n        </div>\n\n    </form>\n\n\n\n    <div text-center style="padding-top: 20px">\n\n            <button ion-button icon-start full color="secondary" (click)="logout()" *ngIf="authProvider.authenticated">\n\n                <ion-icon name="log-out"></ion-icon>\n\n                Log out\n\n            </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n\n    <ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var HomePage = (function () {
    function HomePage(navCtrl, storage, toastCtrl, app, http, loadingCtrl, imagePicker, camera, authProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.authProvider = authProvider;
        this.BaseUrl = "https://homeserviceapps.com/freedomjobs/";
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
            'review': false,
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
            'estimateSent': false,
            'estimateReco': '',
            'estimateApproved': false,
            'productReco': '',
            'images': '',
        };
        this.selectedImages = [];
        this.selectedImageFiles = [];
        this.dataURLtoFile = function (dataurl, filename) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.currentuid = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser.uid;
        this.loadUserData();
        // this.loadJobData();
    };
    HomePage.prototype.loadJobData = function () {
        var _this = this;
        this.authProvider.getJob(this.currentuid)
            .first()
            .subscribe(function (job) {
            console.log('job >>', job);
            if (job) {
                for (var key in _this.data) {
                    _this.data[key] = job[key];
                }
            }
            else {
                _this.loadUserData();
            }
        });
    };
    HomePage.prototype.loadUserData = function () {
        var _this = this;
        this.authProvider.getUser(this.currentuid)
            .first()
            .subscribe(function (user) {
            console.log('user >>', user);
            if (user) {
                _this.data.fullName = user.fullName;
                _this.data.employeeNumber = user.employeeNumber;
                _this.data.email = user.email;
            }
        });
    };
    HomePage.prototype.logout = function () {
        // Api Token Logout
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present().then(function (res) { return res; });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getData = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var keyVal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key)];
                    case 1:
                        keyVal = _a.sent();
                        if (keyVal) {
                            this.data.fullName = keyVal.fullName;
                            this.data.employeeNumber = keyVal.employeeNumber;
                            this.data.email = keyVal.email;
                        }
                        else {
                            this.data.fullName = '';
                            this.data.employeeNumber = '';
                            this.data.email = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.sendData = function () {
        var _this = this;
        this.post('scheduledMail.php', {}).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            _this.presentToast(error);
            console.error('error:', error);
        });
    };
    HomePage.prototype.post = function (url, body) {
        var _this = this;
        this.showLoader();
        var formData = new FormData();
        if (this.selectedImageFiles) {
            this.selectedImageFiles.forEach(function (file) {
                formData.append('attachmentPicture[]', file);
            });
        }
        for (var key in this.data) {
            formData.append(key, this.data[key]);
        }
        console.log('form data >>', formData);
        return this.http.post(this.BaseUrl + url, formData)
            .map(function (res) {
            console.log('api res >>', res);
            if (res.data) {
                _this.selectedImages = [];
                _this.selectedImageFiles = [];
                _this.data.images = res.data;
            }
            return res;
        })
            .finally(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('final fire store:', this.data);
                        return [4 /*yield*/, this.authProvider.addJobs(this.data).then(function (res) {
                                _this.data = {
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
                                _this.selectedImages = [];
                                _this.selectedImageFiles = [];
                                _this.presentToast('Job create successfully');
                                _this.loadUserData();
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        this.hideLoader();
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(this.handleError);
    };
    HomePage.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error.error.error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.error.error);
    };
    HomePage.prototype.showLoader = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: "Please wait...",
            });
        }
        this.loading.present();
    };
    HomePage.prototype.hideLoader = function () {
        if (this.loading) {
            try {
                this.loading.dismiss();
            }
            catch (exception) {
            }
            this.loading = null;
        }
    };
    HomePage.prototype.pickImages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, hasPem, images, images, images, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            maximumImagesCount: 5,
                            outputType: 1,
                            quality: 1
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.imagePicker.hasReadPermission()];
                    case 2:
                        hasPem = _a.sent();
                        if (!hasPem) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.imagePicker.getPictures(options)];
                    case 3:
                        images = _a.sent();
                        this.selectedImages = this.selectedImages.concat(images);
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.imagePicker.requestReadPermission()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.imagePicker.getPictures(options)];
                    case 6:
                        images = _a.sent();
                        this.selectedImages = this.selectedImages.concat(images);
                        _a.label = 7;
                    case 7:
                        if (this.selectedImages && this.selectedImages.length > 0) {
                            images = this.selectedImages.map(function (img, index) {
                                return _this.dataURLtoFile('data:image/png;base64,' + img, "img" + index + ".png");
                            });
                            this.selectedImageFiles = this.selectedImageFiles.concat(images);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, imageData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 50,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.selectedImages.push(imageData);
                        this.selectedImageFiles.push(this.dataURLtoFile('data:image/png;base64,' + imageData, "img.png"));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <img ion-right src="assets/imgs/logo.png" class="navbarLogo"/>\n\n        <ion-title>Job Ticket Summary</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2>Job Time & Summary Form</h2>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Employee Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.fullName" placeholder="John Sm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ith"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Employee #</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.employeeNumber" placeholder="1234567"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>Employee Email</ion-label>\n\n            <ion-input type="email" [(ngModel)]="data.email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Job Date</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2040-12-09" [(ngModel)]="data.jDate"\n\n                          required></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Job Number</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.jobNumber" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Call Type</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.callType">\n\n                <ion-option value="42 - Return to Office">42 - RETURN TO OFFICE</ion-option>\n\n                <ion-option value="AC - Air Conditioning">AC - AIR CONDITIONING</ion-option>\n\n                <ion-option value="ACI - A/C Inspection Promo">ACI - A/C INSPECTION PROMO</ion-option>\n\n                <ion-option value="ACP - A/C Premium Plan">ACP - A/C PREMIUM PLAN</ion-option>\n\n                <ion-option value="ARN - AC Revew Install">ARN - AC-RENEW INSTALL</ion-option>\n\n                <ion-option value="AT - Install Attic Tent">AT - INSTALL ATTIC TENT</ion-option>\n\n                <ion-option value="CKI - Check In">CKI - CHECK IN</ion-option>\n\n                <ion-option value="CL - Condensate Leak">CL - CONDENSATE LEAK</ion-option>\n\n                <ion-option value="CMD - Install Carb Monx De">CMD - INSTALL CARB MONX DE</ion-option>\n\n                <ion-option value="DLT - Duct Leakage Test">DLT - DUCT LEAKAGE TEST</ion-option>\n\n                <ion-option value="DSS - Dirty Sock Syndrome">DSS - DIRTY SOCK SYNDROME</ion-option>\n\n                <ion-option value="DVC - Dryer Vent Cleaning">DVC - DRYER VENT CLEANING</ion-option>\n\n                <ion-option value="EAC - Emergency A/C">EAC - EMERGENCY A/C</ion-option>\n\n                <ion-option value="EAP - Emergency AC Prem">EAP - EMERGENCEY AC PREM</ion-option>\n\n                <ion-option value="EHP - Emergency Heat Prem">EHP - EMERGENCY HEAT PREM</ion-option>\n\n                <ion-option value="EHT - Emergency Heat">EHT - EMERGENCY HEAT</ion-option>\n\n                <ion-option value="EXF - Exhaust Fan">EXF - EXHAUST FAN</ion-option>\n\n                <ion-option value="EZT - Install EZ Trap">EZT - INSTALL EZ TRAP</ion-option>\n\n                <ion-option value="FLO - Flood Inspection">FLO - FLOOD INSPECTION</ion-option>\n\n                <ion-option value="FM - Filter Media">FM - FILTER MEDIA</ion-option>\n\n                <ion-option value="FS - Install Flow Switch">FLO - INSTALL FLOAT SWITCH</ion-option>\n\n                <ion-option value="FU - Follow Up Appointment">FU - FOLLOW UP APPT</ion-option>\n\n                <ion-option value="HEA - Heat">HEA - HEAT</ion-option>\n\n                <ion-option value="HEP - Heat Premium Plan">HEP - HEAT PREMIUM PLAN</ion-option>\n\n                <ion-option value="INF - Info Only">INF - INFO ONLY</ion-option>\n\n                <ion-option value="INS - Inspection">INS - INSPECTION</ion-option>\n\n                <ion-option value="PR - Part Replacement">PR - PART REPLACEMENT</ion-option>\n\n                <ion-option value="PTU - Precision Tune-Up">PTU - PRECISION TUNE-UP</ion-option>\n\n                <ion-option value="RTR - Return to Repair">RTR - RETURN TO REPAIR</ion-option>\n\n                <ion-option value="STU - Start Up">STU - START UP</ion-option>\n\n                <ion-option value="SUB - Sub-Contractor">SUB - SUB-CONTRACTOR</ion-option>\n\n                <ion-option value="SW - Service Warranty">SW - SERVICE WARRANTY</ion-option>\n\n                <ion-option value="TST - Install T-Stat">TST - INSTALL T-STAT</ion-option>\n\n                <ion-option value="UV - Install UV Light">TST - INSTALL UV LIGHT</ion-option>\n\n                <ion-option value="WAR - Warranty">TST - WARRANTY</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n\n            <ion-label position="floating">Job Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.jobName" required></ion-input>\n\n        </ion-item> -->\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.custName" placeholder="Jane Doe" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer Email</ion-label>\n\n            <ion-input type="email" [(ngModel)]="data.custEmail" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer Phone</ion-label>\n\n            <ion-input type="phone" [(ngModel)]="data.custPhone" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer Street</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.custStreet" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer City</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.custCity" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Customer State</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.custState">\n\n                <ion-option value="AL">Alabama</ion-option>\n\n                <ion-option value="GA">Georgia</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Customer Zip</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.custZip" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Job Description</ion-label>\n\n            <ion-textarea [(ngModel)]="data.jobDesc" placeholder="Enter more information here..."\n\n                          required></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Review & Checkin Request</ion-label>\n\n            <ion-toggle color="kiwi" [(ngModel)]="data.review"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Product Recommendations</ion-label>\n\n            <ion-select [(ngModel)]="data.productReco" multiple="true">\n\n                <ion-option value="iaq" selected>Indoor Air Quality Products</ion-option>\n\n                <ion-option value="dehumidifier">Dehumidifier</ion-option>\n\n                <ion-option value="ductrepair">Duct Repair</ion-option>\n\n                <ion-option value="ductreplacement">Duct Replacement</ion-option>\n\n                <ion-option value="specialtyacsystem">Specialty Air Conditioning System</ion-option>\n\n                <ion-option value="tempcontdev">Temperature Control Device</ion-option>\n\n                <ion-option value="energyeffprod">Energy Efficient Products</ion-option>\n\n                <ion-option value="homeprosystem">Home Protection System</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <!-- <div>{{productReco | json }}</div> -->\n\n\n\n        <!-- <ion-item>\n\n            <ion-label>Travel Time</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.travelTime">\n\n                <ion-option value="0">0</ion-option>\n\n                <ion-option value=".25">.25</ion-option>\n\n                <ion-option value=".50">.50</ion-option>\n\n                <ion-option value=".75">.75</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n       <ion-item>\n\n            <ion-label position="floating">Odometer Reading</ion-label>\n\n            <ion-input type="number" [(ngModel)]="data.odometerReading"></ion-input>\n\n        </ion-item> -->\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Time In</ion-label>\n\n            <ion-datetime displayFormat="h:mm a" [(ngModel)]="data.timeIn"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Time Out</ion-label>\n\n            <ion-datetime displayFormat="h:mm a" [(ngModel)]="data.timeOut"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n\n            <ion-label position="floating">Worked Time (Reg)</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.worktimeReg"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Worked Time (OT)</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.worktimeOT" required></ion-input>\n\n        </ion-item> -->\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Compensation</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.jobCompensation" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Turn Over</ion-label>\n\n            <ion-toggle color="kiwi" [(ngModel)]="data.turnOver"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Turn Over to Whom</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.turnOverWhom" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label position="floating">Revenue Amount</ion-label>\n\n            <ion-input type="text" [(ngModel)]="data.revAmt" placeholder="$89.00" required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Payment Method</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.paymentMethod">\n\n                <ion-option value="Cash">Cash</ion-option>\n\n                <ion-option value="Check">Check</ion-option>\n\n                <ion-option value="Credit">Credit</ion-option>\n\n                <ion-option value="Account">On Account</ion-option>\n\n                <ion-option value="Prepaid">Pre-Paid</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Customer Type</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.custType">\n\n                <ion-option value="ESA/MSA">ESA/MSA</ion-option>\n\n                <ion-option value="CMA">CMA</ion-option>\n\n                <ion-option value="T/M Res">T/M Res</ion-option>\n\n                <ion-option value="T/M Comm">T/M Comm</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Equipment Age</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.equipmentAge">\n\n                <ion-option value="0">0 Year Old</ion-option>\n\n                <ion-option value="1">1 Year Old</ion-option>\n\n                <ion-option value="2">2 Years Old</ion-option>\n\n                <ion-option value="3">3 Years Old</ion-option>\n\n                <ion-option value="4">4 Years Old</ion-option>\n\n                <ion-option value="5">5 Years Old</ion-option>\n\n                <ion-option value="6">6 Years Old</ion-option>\n\n                <ion-option value="7">7 Years Old</ion-option>\n\n                <ion-option value="8">8 Years Old</ion-option>\n\n                <ion-option value="9">9 Years Old</ion-option>\n\n                <ion-option value="10">10 Years Old</ion-option>\n\n                <ion-option value="10+">10+ Years Old</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Add to Agreement List</ion-label>\n\n            <ion-select placeholder="Select One" required [(ngModel)]="data.agreementList">\n\n                <ion-option value="Yes">Yes</ion-option>\n\n                <ion-option value="YR/MO">YR / MO</ion-option>\n\n                <ion-option value="No">No</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Estimate Sent</ion-label>\n\n            <ion-toggle color="kiwi" [(ngModel)]="data.estimateSent"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Estimate Recommendations</ion-label>\n\n            <ion-select [(ngModel)]="data.estimateReco" multiple="true">\n\n                <ion-option value="iaq" selected>Indoor Air Quality Products</ion-option>\n\n                <ion-option value="dehumidifier">Dehumidifier</ion-option>\n\n                <ion-option value="ductrepair">Duct Repair</ion-option>\n\n                <ion-option value="ductreplacement">Duct Replacement</ion-option>\n\n                <ion-option value="specialtyacsystem">Specialty Air Conditioning System</ion-option>\n\n                <ion-option value="tempcontdev">Temperature Control Device</ion-option>\n\n                <ion-option value="energyeffprod">Energy Efficient Products</ion-option>\n\n                <ion-option value="homeprosystem">Home Protection System</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Estimate Approved</ion-label>\n\n            <ion-toggle color="kiwi" [(ngModel)]="data.estimateApproved"></ion-toggle>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="data.images && data.images.length && data.images.length > 0">\n\n            <ion-thumbnail *ngFor="let imgUrl of data.images">\n\n                <img [src]="imgUrl">\n\n            </ion-thumbnail>\n\n        </ion-item>\n\n        <ion-item *ngIf="selectedImages && selectedImages.length && selectedImages.length > 0">\n\n            <ion-thumbnail *ngFor="let imgUrl of selectedImages">\n\n                <img [src]="\'data:image/png;base64,\'+imgUrl">\n\n            </ion-thumbnail>\n\n        </ion-item>\n\n\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                <button ion-button full color="secondary" (click)="pickImages()"><ion-icon name="cloud-upload"></ion-icon> Select Images</button>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                <button ion-button full color="secondary" (click)="openCamera()"><ion-icon name="camera"></ion-icon> Capture Image</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>        \n\n\n\n        <button ion-button block color="primary" (click)="sendData()">Send Info</button>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _j || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentJobs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jobs_firebase_jobs_data__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recentjobssingle_recentjobssingle__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecentJobs = (function () {
    function RecentJobs(navCtrl, navParams, firebasejobsData, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebasejobsData = firebasejobsData;
        this.toastCtrl = toastCtrl;
        this.jobs = [];
    }
    RecentJobs.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad RecentjobsPage');
        this.updateJobs();
    };
    RecentJobs.prototype.updateJobs = function () {
        var _this = this;
        this.firebasejobsData.getJobs().subscribe(function (jobs) {
            _this.jobs = Object.keys(jobs).map(function (key) { return jobs[key]; });
            console.log('jobs >>>', _this.jobs);
        });
    };
    RecentJobs.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log(this.jobs);
        setTimeout(function () {
            _this.updateJobs();
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Jobs list has been updated.',
                duration: 3000
            });
            toast.present();
        }, 1000);
    };
    RecentJobs.prototype.viewJob = function (job) {
        console.log('selected job >>', job);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recentjobssingle_recentjobssingle__["a" /* RecentjobssinglePage */], { job: job });
    };
    RecentJobs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recentjobs',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\recentjobs\recentjobs.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Project Feed</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-card *ngFor="let job of jobs">\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start *ngIf="job.img; else defcon">\n\n                <img src="{{job.img}}">\n\n            </ion-avatar>\n\n            <ng-template #defcon>\n\n                <ion-avatar item-start>\n\n                    <img src="assets/img/icon-1024.png">\n\n                </ion-avatar>\n\n            </ng-template>\n\n            <h2>{{job.custName}}</h2>\n\n        </ion-item>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col *ngFor="let img of job.images">\n\n                    <div>\n\n                        <img src="{{ img }}"/>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <button ion-button block color="primary" (click)="viewJob(job)">View Job</button>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\recentjobs\recentjobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_jobs_firebase_jobs_data__["a" /* FirebaseJobsData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RecentJobs);
    return RecentJobs;
}());

//# sourceMappingURL=recentjobs.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentjobssinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jobs_firebase_jobs_data__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentjobssinglePage = (function () {
    function RecentjobssinglePage(navCtrl, navParams, firebasejobsData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebasejobsData = firebasejobsData;
        this.job = this.navParams.get('job');
    }
    RecentjobssinglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecentjobssinglePage');
        console.log('job >>', this.job);
    };
    RecentjobssinglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recentjobssingle',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\recentjobssingle\recentjobssingle.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Job Detail</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4><b>Job Date :</b></ion-col>\n\n            <ion-col col-8>{{ job?.jDate }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Job Number :</b></ion-col>\n\n            <ion-col col-8>{{ job?.jobNumber }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>JCall Type :</b></ion-col>\n\n            <ion-col col-8>{{ job?.callType }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Name :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custName }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Email :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custEmail }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Phone :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custPhone }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Street :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custStreet }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer City :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custCity }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer State :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custState }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Zip :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custZip }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Customer Type :</b></ion-col>\n\n            <ion-col col-8>{{ job?.custType }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-4><b>Full Name :</b></ion-col>\n\n            <ion-col col-8>{{ job?.fullName }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Email :</b></ion-col>\n\n            <ion-col col-8>{{ job?.email }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Employee Number :</b></ion-col>\n\n            <ion-col col-8>{{ job?.employeeNumber }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Equipment Age :</b></ion-col>\n\n            <ion-col col-8>{{ job?.equipmentAge }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>EstimateApproved :</b></ion-col>\n\n            <ion-col col-8>{{ job?.estimateApproved ? \'Yes\' : \'No\' }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Estimate Reco :</b></ion-col>\n\n            <ion-col col-8>{{ job?.estimateReco }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Estimate Sent :</b></ion-col>\n\n            <ion-col col-8>{{ job?.estimateSent ? \'Yes\' : \'No\' }}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-4><b>Job Amount :</b></ion-col>\n\n            <ion-col col-8>{{ job?.revAmt }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Job Description :</b></ion-col>\n\n            <ion-col col-8>{{ job?.jobDesc }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Review & Checkin Request :</b></ion-col>\n\n            <ion-col col-8>{{ job?.review ? \'Yes\' : \'No\' }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Product Record :</b></ion-col>\n\n            <ion-col col-8>{{ job?.productReco.join(\', \') }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Time In :</b></ion-col>\n\n            <ion-col col-8>{{ job?.timeIn }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Time Out :</b></ion-col>\n\n            <ion-col col-8>{{ job?.timeOut }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Compensation :</b></ion-col>\n\n            <ion-col col-8>{{ job?.jobCompensation }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Turn Over :</b></ion-col>\n\n            <ion-col col-8>{{ job?.turnOver ? \'Yes\' : \'No\' }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Turn Over to Whom :</b></ion-col>\n\n            <ion-col col-8>{{ job?.turnOverWhom }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Payment Method :</b></ion-col>\n\n            <ion-col col-8>{{ job?.paymentMethod }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4><b>Agreement List :</b></ion-col>\n\n            <ion-col col-8>{{ job?.agreementList }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col *ngFor="let img of job?.images">\n\n                <div>\n\n                    <img src="{{ img }}"/>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\recentjobssingle\recentjobssingle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_jobs_firebase_jobs_data__["a" /* FirebaseJobsData */]])
    ], RecentjobssinglePage);
    return RecentjobssinglePage;
}());

//# sourceMappingURL=recentjobssingle.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recentjobs_recentjobs__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_jobs_firebase_jobs_data__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_firebase_config__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ultimate_ngxerrors__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_recentjobssingle_recentjobssingle__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recentjobs_recentjobs__["a" /* RecentJobs */],
                __WEBPACK_IMPORTED_MODULE_25__pages_recentjobssingle_recentjobssingle__["a" /* RecentjobssinglePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_17__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recentjobs_recentjobs__["a" /* RecentJobs */],
                __WEBPACK_IMPORTED_MODULE_25__pages_recentjobssingle_recentjobssingle__["a" /* RecentjobssinglePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__providers_jobs_firebase_jobs_data__["a" /* FirebaseJobsData */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof Response) {
        var body = error.json() || '';
        var err = body || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var AuthProvider = (function () {
    function AuthProvider(http, afAuth, afDatabase) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.firedata = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/users');
        this.jobsRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/jobs');
        console.log('Hello AuthProvider Provider');
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.getUser = function (userId) {
        return this.afDatabase.object("/users/" + userId)
            .valueChanges()
            .catch(this.handleObservableError);
    };
    AuthProvider.prototype.getJob = function (userId) {
        return this.afDatabase.object("/jobs/" + userId)
            .valueChanges()
            .catch(this.handleObservableError);
    };
    AuthProvider.prototype.updateUsers = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid).update({
                fullName: user.name,
                employeeNumber: user.employeeNumber,
            }).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.addJobs = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.jobsRef.push(data).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.updateJobs = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.jobsRef.child(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid).set(data).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(extractError(error));
    };
    AuthProvider.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.auth.afAuth.authState
                .subscribe(function (user) {
                console.log(user);
                if (user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDWtFx3WKThjiLag0toGFE2YzRNU4Y3KPs",
    authDomain: "freedomjobs-396a3.firebaseapp.com",
    databaseURL: "https://freedomjobs-396a3.firebaseio.com",
    projectId: "freedomjobs-396a3",
    storageBucket: "",
    messagingSenderId: "706429901852",
    appId: "1:706429901852:web:5d74cde1dc3d5c92"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, storage, navParams, toastCtrl, fb, auth) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function (result) {
            console.log('result', result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { return _this.loginError = error.message; });
    };
    /*login(){
      //Api connections
      this.getData('userInfo');
    }
  */
    Login.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present().then(function (res) { return res; });
                        return [2 /*return*/];
                }
            });
        });
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n\n    <ion-list inset>\n\n\n\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n        <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n\n      </div>\n\n\n\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <div padding-horizontal>\n\n      <div class="form-error">{{loginError}}</div>\n\n      <button ion-button full color="primary" type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\ionic-projects\freedomjobs\src\pages\welcome\welcome.html"*/'\n\n\n\n\n\n<ion-content padding id="welcome">\n\n\n\n<img src="assets/imgs/logo.png" class="logo"/>\n\n<h3>Daily Time and Job Ticket Summary App</h3>\n\n\n\n<button ion-button block color="primary" class="marginTop" (click)="signup()">Signup</button>\n\n<button ion-button block color="secondary" (click)="login()">Login</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-projects\freedomjobs\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[390]);
//# sourceMappingURL=main.js.map