import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

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
import {ProduitsService} from './produit/produit.service';
import { FormsModule} from '@angular/forms';
import { XhrInterceptor } from './xhr.interceptor';

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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    produitService,
    ProduitsService,
    AppService,
    {provide:HTTP_INTERCEPTORS, useClass:XhrInterceptor, multi:true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
