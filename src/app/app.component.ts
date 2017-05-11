import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import { Dps } from './data/jobs'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AngularFireDatabase,AngularFireAuth],
})
export class AppComponent implements OnInit {
  title = 'DPS';
  user: Observable<firebase.User>;
  jobs:FirebaseListObservable<any[]>;
  prepress:any[] = [];
  ryobi:any[] = [];
  data='';

  
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth){
    this.user = afAuth.authState;
    this.jobs = this.db.list('/jobs');
    //console.log(this.jobs.subscribe(data => console.log(data)))
  }

  ngOnInit(){}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  filter(data){}

  addSticky(){
    this.jobs.push({name:this.data});
    this.data='';
  }

  delete(data){
    this.jobs.remove(data);
  }


}
