import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import {ProduitComponent} from './produit/produit.component';
import {produitService} from './produit/produit.mock.service';
import {Produit} from './shared/produit';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashbordComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [produitService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
