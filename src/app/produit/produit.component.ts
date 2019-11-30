import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Component, OnInit} from '@angular/core';
import {Produit} from '../shared/produit';
import {produitService} from '../produit/produit.mock.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{
  produits:Produit[];
public constructor(private pdtService:produitService){}

  ngOnInit(){
  this.produits=this.pdtService.getProduits();
}
}
