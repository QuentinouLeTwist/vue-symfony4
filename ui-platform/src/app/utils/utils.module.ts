import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatButtonToggleModule, MatCardModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CardQuickAccessComponent} from "./card-quick-access/card-quick-access.component";
import { ButtonImageComponent } from './button-image/button-image.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
  ],
  declarations: [CardQuickAccessComponent, ButtonImageComponent],
  exports: [CardQuickAccessComponent, ButtonImageComponent]
})
export class UtilsModule { }
