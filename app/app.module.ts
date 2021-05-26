import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {UserServiceService} from './user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
