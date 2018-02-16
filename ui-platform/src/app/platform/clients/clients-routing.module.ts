import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AuthGuard} from "../../../common/auth/guard/auth.guard";
import {UserGuard} from "../../../common/user/guard/user.guard";
import {ClientListComponent} from "./client-list/client-list.component";
import {ClientFormComponent} from "./client-form/client-form.component";

const clientsRoutes: Routes = [
  {
    path: 'platform/clients',
    component: ClientListComponent,
    canActivate: [AuthGuard, UserGuard],
  },
  {
    path: 'platform/clients/create',
    component: ClientFormComponent,
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
      clientsRoutes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class ClientsRoutingModule {}
