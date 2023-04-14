import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenamientosRoutingModule } from './entrenamientos-routing.module';
import { EntrenamientosComponent } from './entrenamientos.component';


@NgModule({
  declarations: [
    EntrenamientosComponent
  ],
  imports: [
    CommonModule,
    EntrenamientosRoutingModule
  ]
})
export class EntrenamientosModule { }
