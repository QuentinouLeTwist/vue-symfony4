import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserCredential} from '../user/user-credential';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() credential: UserCredential;
  @Output() onLogin = new EventEmitter<boolean>();

  login() {
    console.log('emitting login event');
    this.onLogin.emit();
  }

  ngOnInit(): void {}
}
