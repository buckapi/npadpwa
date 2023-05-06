import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Memory1RoutingModule } from './memory1-routing.module';
import { Memory1Component } from './memory1.component';


@NgModule({
  declarations: [
    Memory1Component
  ],
  imports: [
    CommonModule,
    Memory1RoutingModule
  ]
})
export class Memory1Module { }
