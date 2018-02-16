import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatMenuModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {AuthService} from "../../common/auth/auth.service";
import {UserService} from "../../common/user/user.service";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    UtilsModule,
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavigationModule { }
