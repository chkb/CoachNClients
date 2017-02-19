import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  title: string = "Dashboard";
  items: FirebaseListObservable<any[]>;
  value: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    
  }

  ngOnInit() {
    this.items = this.af.database.list('/clients');
  }

}
