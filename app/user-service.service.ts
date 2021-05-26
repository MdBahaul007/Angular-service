import { Injectable } from '@angular/core';
// import {UserComponent} from './user/user.component'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getDatabase(){
    return [
      {user:"MBM",age:21,nationality:"Indian"},
      {user:"BOB",age:21,nationality:"American"},
      {user:"John",age:21,nationality:"Japan"}
    ];
  }
}
