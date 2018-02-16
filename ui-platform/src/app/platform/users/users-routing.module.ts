import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AuthGuard} from "../../../common/auth/guard/auth.guard";
import {UserGuard} from "../../../common/user/guard/user.guard";
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";

const usersRoutes: Routes = [
  { path: '', redirectTo: '/platform/users', pathMatch: 'full' },
  {
    path: 'platform/users',
    component: UserListComponent,
    canActivate: [AuthGuard, UserGuard],
  },
  {
    path: 'platform/users/create',
    component: UserFormComponent,
    canActivate: [AuthGuard, UserGuard],
  },
];

@NgModule({
  providers: [
    AuthGuard,
    UserGuard
  ],
  imports: [
    RouterModule.forChild(
      usersRoutes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}
