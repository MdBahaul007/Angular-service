import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

// import {} from './'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public database:any=[];



  constructor(private user:UserServiceService) { }

  ngOnInit(){
    this.database=this.user.getDatabase();
    // console.log(this.database)
  }

}
