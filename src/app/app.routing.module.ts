import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProduitResolver} from './produit/produit.resolver';

const routes: Routes = [
  {path: 'produit',
  component: ProduitComponent,
   resolve: {
    produits:ProduitResolver,
   }
  },
  {path: 'dashbord', component: DashbordComponent},
  {path: '', redirectTo: '/dashbord', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true})
  ],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
