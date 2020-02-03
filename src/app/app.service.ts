import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';
import {CookieService} from 'ngx-cookie-service';
import 'rxjs/add/operator/finally';

@Injectable()
export class AppService {

  authenticated:boolean=false;
  constructor(private http:HttpClient, private cookieService:CookieService) {}

  authenticate(credentials, callback){
    // if(credentials && credentials.username=='user' && credentials.password=='password1'){
    //   return callback && callback();
    // } else {
    //   this.authenticated=false;
    // }
    // return '';
    const token=btoa(credentials.username + ':' + credentials.password);
    this.cookieService.set('token', token);

    if(credentials){
      this.http.get(API_URLS.USERS_URL).subscribe(response =>{
        if(response['name']){
          this.authenticated=true;
        } else {
          this.authenticated=false;
        }
          return callback && callback();
      });
   } else {
        this.authenticated=false;
   }
 }
 logOut(callback){
   return callback && callback();
 }
}
