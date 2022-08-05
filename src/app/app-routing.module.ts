import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdashboardComponent } from './prodashboard/prodashboard.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: ProdashboardComponent
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
