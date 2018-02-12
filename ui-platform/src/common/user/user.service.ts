import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {User} from './user';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {

  constructor(public api: ApiService, public auth: AuthService) { }

  async fetchUser() {
    if (this.auth.isAuthenticated()) {
      const response: any = await this.api.fetch('user/me');
      return new User(response.id, response.username, response.email);
    }

    return new User();
  }

}
