import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Component, OnInit} from '@angular/core';
import {Produit} from '../shared/produit';
import {ProduitsService} from '../produit/produit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{
  produits: Produit[];
  produitForm: FormGroup;
  selectedProduit: Produit;
  operation:String='add';

  public constructor(private pdtService:ProduitsService, private fb:FormBuilder,
         private activatedRouter:ActivatedRoute){
  this.createForm();
}

  ngOnInit(){
  //this.produits=this.pdtService.getProduits();
  this.initialiserProduit();
  //this.loadProduits();
  this.produits=this.activatedRouter.snapshot.data.produits;
}

  createForm(){
    this.produitForm=this.fb.group({
    ref:['', Validators.required],
    quantite:'',
    prixUnitaire:'',
   });
  }

  loadProduits(){
    this.pdtService.getListProduits().subscribe(
      data=>{this.produits=data},
      error=>{console.log('An error was occured.')},
      ()=>{console.log('loading produits was done.')},
    )
  }
  addProduit(){
    const p=this.produitForm.value;
    this.pdtService.onAjouter(p).subscribe(
      res=>{
        this.initialiserProduit();
        this.loadProduits();
      }
    )
  }
  updateProduit(){
    this.pdtService.updateProduit(this.selectedProduit).subscribe(
      res=>{
        this.selectedProduit=new Produit();
        this.loadProduits();
      }
    )
  }

  onDelete(){
    this.pdtService.onDelete(this.selectedProduit.ref).subscribe(
      res=>{
        this.selectedProduit=new Produit();
        this.loadProduits();
      }
    )
  }

  initialiserProduit(){
    this.selectedProduit=new Produit();
    this.createForm();
  }
}
