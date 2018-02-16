import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from "../user.service";
import {User} from "../user";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.isUserFetched(url);
  }

  private isUserFetched(url: string) {
    let user = this.userService.getUser();
    return user instanceof User && user.isAuthenticated();
  }
}