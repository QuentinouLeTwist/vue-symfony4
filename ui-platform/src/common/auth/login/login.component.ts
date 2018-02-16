import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserCredential} from '../credential/user-credential';
import {AuthenticationEventEmitter} from "../event/authentication-event-emitter.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() credential: UserCredential;
  @Output() onLogin = new EventEmitter<boolean>();

  login() {
    this.onLogin.emit();
  }

  ngOnInit(): void {}
}
