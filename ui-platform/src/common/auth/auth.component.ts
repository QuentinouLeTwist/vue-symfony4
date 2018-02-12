import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { AuthService } from './auth.service';
import { UserCredential } from './user/user-credential';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-auth',
  template: `
      <app-auth-login *ngIf="!authService.isAuthenticated()"
        [credential]="credential"
        (onLogin)="onLogin($event)">
      </app-auth-login>
  `,
})
export class AuthComponent implements OnInit {
  credential: UserCredential;
  @Output() onAuthentication = new EventEmitter<string>();

  constructor(public authService: AuthService) {
      this.credential = new UserCredential();
  }

  async onLogin() {
    this.onAuthentication.emit(await this.authService.login(this.credential));
  }

  ngOnInit() {
    // console.log('initialization...');
  }
}
