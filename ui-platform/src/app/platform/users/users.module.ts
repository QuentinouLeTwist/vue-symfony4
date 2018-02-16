import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import {UserListComponent} from "./user-list/user-list.component";
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [UserFormComponent, UserListComponent],
  exports: [UserFormComponent, UserListComponent],
})
export class UsersModule { }
