import {Produit} from '../shared/produit'
import {Injectable} from '@angular/core'

@Injectable()
export class produitService{

  private produits : Produit[]=[];
  public constructor(){
    let p1:Produit=new Produit('Livre', 300, 12);
    let p2:Produit=new Produit('Stylo', 500, 1.5);
    let p3:Produit=new Produit('Cartable', 90, 200);
    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
  }
  public  getProduits() : Produit[]{
     return this.produits;
  }
}
