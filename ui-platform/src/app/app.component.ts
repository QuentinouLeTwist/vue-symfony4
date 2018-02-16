import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from '../common/user/user.service'
import { AuthenticationEventEmitter } from '../common/auth/event/authentication-event-emitter.service';
import {AuthenticationEvent} from "../common/auth/event/authentication-event";
import TokenSessionStorage from "../common/auth/token/token-session-storage";
import {AuthService} from "../common/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private appReady: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.appReady = false;
  }

  isAppReady() {
    return this.appReady;
  }

  ngOnInit(): void {
    this.authService.autologin();

    this.authService.eventEmitter.onAuthenticationSuccess$.subscribe(async () => {
      await this.userService.fetchUserFromApi();
      this.router.navigate(['/platform']);
      this.OnReady();
    });

    this.authService.eventEmitter.onInvalidToken$.subscribe(() => {
      this.router.navigate(['/login']);
      this.OnReady();
    });
  }

  private OnReady() {
    this.appReady = true;
  }
}
