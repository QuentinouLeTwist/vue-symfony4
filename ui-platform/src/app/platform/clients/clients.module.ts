import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {ClientsRoutingModule} from "./clients-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
  ],
  declarations: [ClientListComponent, ClientFormComponent]
})
export class ClientsModule { }
