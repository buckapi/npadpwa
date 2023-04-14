import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenamientosComponent } from './entrenamientos.component';

const routes: Routes = [{ path: '', component: EntrenamientosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenamientosRoutingModule { }
