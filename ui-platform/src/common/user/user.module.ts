import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ApiService,
    AuthService,
  ]
})
export class UserModule { }
