import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { AuthService } from './auth.service';
import { UserCredential } from './credential/user-credential';
import {AuthenticationEventEmitter} from "./event/authentication-event-emitter.service";
import {AuthenticationEvent} from "./event/authentication-event";
import TokenSessionStorage from "./token/token-session-storage";

@Component({
  selector: 'app-auth',
  template: `
      <app-auth-login *ngIf="!authService.isAuthenticated()"
        [credential]="credential"
        (onLogin)="onLogin($event)">
      </app-auth-login>
  `,
})
export class AuthComponent {
  credential: UserCredential;
  @Output() onAuthentication = new EventEmitter<string>();

  constructor(public authService: AuthService) {
    this.credential = new UserCredential();
  }

  onLogin() {
    this.authService.login(this.credential);
  }

}
