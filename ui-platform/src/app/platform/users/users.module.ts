import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import {UserListComponent} from "./user-list/user-list.component";
import {UsersRoutingModule} from "./users-routing.module";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ButtonImageComponent} from "../../utils/button-image/button-image.component";
import {UtilsModule} from "../../utils/utils.module";
import {FormBuilder} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    UtilsModule,
  ],
  declarations: [UserFormComponent, UserListComponent],
  exports: [UserFormComponent, UserListComponent],
  providers: [
    FormBuilder,
  ]
})
export class UsersModule { }
