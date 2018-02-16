import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {User} from './user';
import { AuthService } from '../auth/auth.service';
import {UserEventEmitter} from "./event/user-event-emitter";
import {UserEventType} from "./event/user-event-type";

@Injectable()
export class UserService {

  private _cachedUser: User;

  constructor(private api: ApiService, public eventEmitter: UserEventEmitter) {}

  getUser() {
    if (this._cachedUser instanceof User) {
      return this._cachedUser;
    }

    return new User(null, null, null, false);
  }

  async fetchAllUsers() {
    try {
      const response: any = await this.api.fetch('users');
      this.eventEmitter.emitFetchSuccess(UserEventType.ON_USER_FETCH_SUCCESS, {users: response});
    } catch(error) {
      this.eventEmitter.emitFetchFailure(UserEventType.ON_USER_FETCH_FAILURE, error);
    }
  }

  async fetchUserFromApi() {
    try {
      const response: any = await this.api.fetch('user/me');
      this._cachedUser = new User(response.id, response.username, response.email, true);
      this.eventEmitter.emitFetchSuccess(UserEventType.ON_USER_FETCH_SUCCESS, {user: this._cachedUser});
    } catch(error) {
      this.eventEmitter.emitFetchFailure(UserEventType.ON_USER_FETCH_FAILURE, error);
    }
  }
}
