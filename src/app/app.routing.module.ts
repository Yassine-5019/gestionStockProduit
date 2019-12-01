import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'dashbord', component: DashbordComponent},
  {path: '', redirectTo: '/dashbord', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
