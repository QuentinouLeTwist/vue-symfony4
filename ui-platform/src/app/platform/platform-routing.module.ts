import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PlatformComponent} from "./platform.component";
import {AuthGuard} from "../../common/auth/guard/auth.guard";
import {UserGuard} from "../../common/user/guard/user.guard";

const platformRoutes: Routes = [
  { path: '', redirectTo: '/platform', pathMatch: 'full' },
  {
    path: 'platform/products',
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
    RouterModule.forChild(
      platformRoutes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class PlatformRoutingModule {}
