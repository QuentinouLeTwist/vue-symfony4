import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthMaterialModule} from './auth-material.module';
import {AuthService} from './auth.service';
import {ApiService} from '../api/api.service';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthMaterialModule,
  ],
  declarations: [ AuthComponent, LoginComponent ],
  exports: [ AuthComponent ],
  providers: [
    AuthService,
    ApiService
  ],
})
export class AuthModule { }
