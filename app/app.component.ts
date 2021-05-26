import { Component } from '@angular/core';
// import {UsersService} from './users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  // name=""
  // age:number=0
  // constructor(private user:UsersService){
  //   let data=this.user.getData();
  //   this.name=data.name
  //   this.age=data.age
  //   console.log(this.user.getData())
  // }

  constructor(){}
}
