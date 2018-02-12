import { Injectable } from '@angular/core';
import { UserCredential } from './user/user-credential';
import { ApiService } from '../api/api.service';

@Injectable()
export class AuthService {
  private token: string;

  constructor(public api: ApiService) {
    this.token = '';
  }

  async login(user: UserCredential): Promise<string> {
    this.token = await this.askToken({username: user.username, password: user.password});

    return this.token;
  }

  async askToken(body): Promise<string> {
    const response: any = await this.api.post('login_check', body);

    return response.token;
  }

  isAuthenticated(): boolean {
    return this.token !== '';
  }

  getToken(): string {
    return this.token;
  }
}
