import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Memory2Component } from './memory2.component';

const routes: Routes = [{ path: '', component: Memory2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Memory2RoutingModule { }
