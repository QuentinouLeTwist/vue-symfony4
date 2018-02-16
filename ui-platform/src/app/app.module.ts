import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../common/auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../common/auth/token/token-interceptor';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../common/user/user.module'
import { UserService } from '../common/user/user.service';
import { AppRoutingModule } from "./app-routing.module";
import {PlatformModule} from "./platform/platform.module";
import {AuthenticationEventEmitter} from "../common/auth/event/authentication-event-emitter.service";
import { LoginComponent } from './login/login.component';
import {AuthService} from "../common/auth/auth.service";
import {NavigationModule} from "./navigation/navigation.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CardQuickAccessComponent } from './utils/card-quick-access/card-quick-access.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    UserModule,
    PlatformModule,
    AppRoutingModule,
    NavigationModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthenticationEventEmitter,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
