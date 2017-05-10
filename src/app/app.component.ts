import { Component, OnInit} from '@angular/core';
import { Http,RequestOptions,Request,RequestMethod } from '@angular/http';
import { Dps } from './data/jobs'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Dps],
})
export class AppComponent implements OnInit {
  title = 'DPS';
  jobs:any = [];
  prepress:any[] = [];
  ryobi:any[] = [];
  data='';

  
  constructor(private dps:Dps){
  	this.jobs = this.dps.jobs;
  }

  ngOnInit(){
    //console.log(this.jobs);
  }

  filter(data){
     console.log(data);
     this.jobs.filter( el => console.log(el.job_no === data));
     //console.log(this.jobs);
  }


}
