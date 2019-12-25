import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ProduitsService} from '../produit/produit.service';


@Injectable()
export class ProduitResolver implements Resolve<any>{
  constructor(private pdtService:ProduitsService){

  }
  resolve(){
    return this.pdtService.getListProduits();
  }
}
