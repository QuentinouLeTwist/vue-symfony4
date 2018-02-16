import {Component, OnInit} from '@angular/core';
import {User} from "../../common/user/user";
import {UserService} from "../../common/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css'],
})
export class PlatformComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  goTo($event: any) {
    if ($event === 'users') {
      return this.router.navigate(['platform/users/create'])
    }
    if ($event === 'clients') {
      return this.router.navigate(['platform/clients/create'])
    }
  }
}
