import { Injectable } from '@angular/core';
import { UserCredential } from './credential/user-credential';
import { ApiService } from '../api/api.service';
import TokenSessionStorage from "./token/token-session-storage";
import { AuthenticationEventEmitter } from "./event/authentication-event-emitter.service";

@Injectable()
export class AuthService {
  private authenticated: boolean;

  constructor(private api: ApiService, public eventEmitter: AuthenticationEventEmitter) {
    this.authenticated = false;
  }

  async login(user: UserCredential) {
    const token = await this.askToken({username: user.username, password: user.password});
    TokenSessionStorage.setToken(token);
    this.authenticated = true;
    this.eventEmitter.emitSuccessEvent({token});
  }

  async autologin() {
    if (!TokenSessionStorage.isTokenExists() || !await this.pingApi()) {
      return this.eventEmitter.emitInvalidTokenEvent();
    }

    this.authenticated = true;
    const token = TokenSessionStorage.getToken();

    return this.eventEmitter.emitSuccessEvent({token});
  }

  async askToken(body: {username, password}): Promise<string> {
    const response: any = await this.api.post('login_check', body);

    return response.token;
  }

  async pingApi() {
    try {
      await this.api.fetch('ping');
      return true;
    } catch (error) {
      console.log(error);
    }

    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

}
