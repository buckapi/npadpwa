import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Memory2RoutingModule } from './memory2-routing.module';
import { Memory2Component } from './memory2.component';


@NgModule({
  declarations: [
    Memory2Component
  ],
  imports: [
    CommonModule,
    Memory2RoutingModule
  ]
})
export class Memory2Module { }
