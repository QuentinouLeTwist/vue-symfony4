import {Injectable} from "@angular/core";


@Injectable()
export default class TokenSessionStorage {

  static getToken() {
    return sessionStorage.getItem('PlatformSessionToken');
  }

  static setToken(token: string) {
    return sessionStorage.setItem('PlatformSessionToken', token);
  }

  static isTokenExists() {
    return sessionStorage.getItem('PlatformSessionToken') !== null;
  }

}