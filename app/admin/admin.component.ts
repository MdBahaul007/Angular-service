import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public database:any=[];

  constructor(private admin:UserServiceService)  { }

  ngOnInit(){
    this.database=this.admin.getDatabase();
      console.log(this.database);

  }

}
