import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Memory1Component } from './memory1.component';

const routes: Routes = [{ path: '', component: Memory1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Memory1RoutingModule { }
