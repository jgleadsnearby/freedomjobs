import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";
import firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const extractError = (error: Response | any): string => {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    return errMsg;
};


@Injectable()
export class AuthProvider {

    firedata = firebase.database().ref('/users');
    jobsRef = firebase.database().ref('/jobs');
    private user: firebase.User;

    constructor(public http: HttpClient, public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase,) {
        console.log('Hello AuthProvider Provider');
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }

    signInWithEmail(credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    get authenticated(): boolean {
        return this.user !== null;
    }

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    getUser(userId: string) {
        return this.afDatabase.object(`/users/${userId}`)
            .valueChanges()
            .catch(this.handleObservableError);

    }

    getJob(userId: string) {
        return this.afDatabase.object(`/jobs/${userId}`)
            .valueChanges()
            .catch(this.handleObservableError);

    }

    updateUsers(user) {
        return new Promise((resolve, reject) => {
            this.firedata.child(firebase.auth().currentUser.uid).update({
                fullName: user.name,
                employeeNumber: user.employeeNumber,
            }).then(() => {
                resolve({success: true});
            }).catch((err) => {
                reject(err);
            })

        });
    }

    updateJobs(data) {
        return new Promise((resolve, reject) => {
            this.jobsRef.child(firebase.auth().currentUser.uid).set(data).then(() => {
                resolve({success: true});
            }).catch((err) => {
                reject(err);
            })
        });
    }

    protected handleObservableError(error: Response | any): Observable<any> {
        return Observable.throw(extractError(error));
    }

    protected handlePromiseError(error: Response | any): Promise<any> {
        return Promise.reject(extractError(error));
    }
}
