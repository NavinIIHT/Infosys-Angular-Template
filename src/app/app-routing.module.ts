import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfyLaptopComponent } from './infy-laptop/infy-laptop.component';

//add the path specifying object
export const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
