import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URLS} from '../config/api.url.config';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitsService{
 constructor(private http:HttpClient ){

 }

 getListProduits(): Observable<any>{
   return this.http.get(API_URLS.PRODUITS_URL);
 }

 onAjouter(p:Produit) : Observable<any>{
   return this.http.post(API_URLS.PRODUITS_URL, p);
 }

 onDelete(id:number) : Observable<any>{
   return this.http.delete(API_URLS.PRODUITS_URL + id);
 }

 updateProduit(p:Produit) : Observable<any>{
   return this.http.put(API_URLS.PRODUITS_URL, p);
 }
}
