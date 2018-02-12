import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../common/auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../common/auth/token/token-interceptor';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../common/user/user.module'
import { UserService } from '../common/user/user.service';
import { UserListComponent } from './dashboard/users/user-list/user-list.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    UserModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
