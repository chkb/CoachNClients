import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  title: string = "Clients";
  items: FirebaseListObservable<any[]>;
  value: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    
  }

  ngOnInit() {
    this.items = this.af.database.list('/clients');
  }

  add(){
    let Alex =
    {
      "fullname":"Alex",
      "email": "test@email.dk",
      "gender": "female",
    };

    const promise = this.items.push(Alex);
    promise
    .then(_ => console.log('success'))
    .catch(err => console.log(err, 'You dont have access!'));
  }

  delete(key: string){
    const promise = this.items.remove(key);
    promise
    .then(_ => console.log('deleted'))
    .catch(err => console.log(err, 'You dont have access!'));
  }

  setValue(data: any) {
    console.log(data);
    this.af.database.object('/items/'+ data.$key).set(data.$value)
      .then(_ => console.log("Set"))
      .catch(err => console.log(err, "Failed"));
  }

  // updateValue(data: any) {
  //   this.value = this.af.database.object('/items/'+data.$key);
  //   this.value.update(data).then(_ => console.log('update!'));
  // }

  updateValue(data: any) {
    console.log(data);
    this.af.database.object("items/"+data.$key).update(data);
  }
}
