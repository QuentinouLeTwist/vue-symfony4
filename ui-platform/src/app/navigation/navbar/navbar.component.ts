import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../common/auth/auth.service";
import {UserService} from "../../../common/user/user.service";
import {User} from "../../../common/user/user";
import {UserEvent} from "../../../common/user/event/user-event";
import {UserEventType} from "../../../common/user/event/user-event-type";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(public authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();

    this.updateUser();
  }

  private updateUser() {
    this.userService.eventEmitter.onFetchSuccess$.subscribe(async (event: UserEvent) => {
      if (NavbarComponent.checkUserEvent(event)) {
        this.user = event.data.user;
      }
    });
  }

  private static checkUserEvent(event: UserEvent) {
    return event.type === UserEventType.ON_USER_FETCH_SUCCESS && NavbarComponent.hasEventUserObject(event.data);
  }

  private static hasEventUserObject(data: {user}) {
    return data.user instanceof User;
  }
}
