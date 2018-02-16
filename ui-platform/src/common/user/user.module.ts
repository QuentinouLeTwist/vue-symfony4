import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';
import {UserEventEmitter} from "./event/user-event-emitter";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    UserEventEmitter,
  ]
})
export class UserModule { }
