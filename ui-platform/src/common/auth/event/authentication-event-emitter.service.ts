import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AuthenticationEvent } from './authentication-event';
import {AuthenticationEventType} from "./authentication-event-type";

@Injectable()
export class AuthenticationEventEmitter {
  onAuthenticationSuccess$ = new EventEmitter();
  onInvalidToken$ = new EventEmitter();
  // onAutologinFailure$ = new EventEmitter();

  emitSuccessEvent(data: {token}) {
    this.onAuthenticationSuccess$.emit(
        new AuthenticationEvent(AuthenticationEventType.ON_AUTHENTICATION_SUCCESS, data)
    );
  }

  emitInvalidTokenEvent() {
    this.onInvalidToken$.emit(
      new AuthenticationEvent(
        AuthenticationEventType.ON_INVALID_TOKEN,
        {error: 'token is invalid'}
      )
    );
  }
}