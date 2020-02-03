import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitResolver} from './produit/produit.resolver';

const routes: Routes = [
  {path: 'home',
   component: HomeComponent,
   children:[
     {path: 'produit',
      component: ProduitComponent,
      resolve: {
       produits:ProduitResolver,
     },
      outlet:'content'
    },

     {path: 'dashbord',
      component: DashbordComponent,
      outlet:'content'
    },
   ]
 },

  {path: 'login',
   component: LoginComponent},

  {path: '',
   redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true})
  ],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
