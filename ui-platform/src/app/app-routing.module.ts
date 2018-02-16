import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PlatformComponent} from "./platform/platform.component";
import {AuthGuard} from "../common/auth/guard/auth.guard";
import {UserGuard} from "../common/user/guard/user.guard";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/platform', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'platform',
    component: PlatformComponent,
    canActivate: [AuthGuard, UserGuard],
  },
];

@NgModule({
  providers: [
    AuthGuard,
    UserGuard
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
