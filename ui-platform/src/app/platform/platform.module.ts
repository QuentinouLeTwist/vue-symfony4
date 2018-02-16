import { NgModule } from '@angular/core';
import {PlatformComponent} from "./platform.component";
import {PlatformRoutingModule} from "./platform-routing.module";
import {MatButtonModule, MatCardModule, MatGridListModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UtilsModule} from "../utils/utils.module";
import {UsersModule} from "./users/users.module";
import {ClientsModule} from "./clients/clients.module";

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    UtilsModule,
    UsersModule,
    ClientsModule,
  ],
  declarations: [ PlatformComponent ],
  exports: [ PlatformComponent ]
})
export class PlatformModule {}
