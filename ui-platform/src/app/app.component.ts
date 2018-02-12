import { Component, Input } from '@angular/core';
import { User } from '../common/user/user';
import { UserCredential } from '../common/auth/user/user-credential';
import { ApiService } from '../common/api/api.service';
import { UserService } from '../common/user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() user: User;
  title = 'app';

  constructor(public api: ApiService, public userService: UserService) {
    this.user = new User();
  }

  async onAuthentication(token: string) {
    const user = await this.userService.fetchUser();
    console.log(user);
    this.user = user;
    this.user.token = token;
  }
}
