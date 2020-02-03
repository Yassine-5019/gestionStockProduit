import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs/Observable';
import { map, catchError, filter, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  constructor(private cookieService:CookieService, private route:Router ) {}
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const token=this.cookieService.get('token');
    const headers = new HttpHeaders().append('Authorization', `Basic ${token}`).append('Content-Type', 'application/json');
    const AuthRequest = req.clone({ headers: headers });
    // const headers=new HttpHeaders({
    //   authorization : 'Basic' + token
    // })
    // const xhr=req.clone({
    //   headers:req.headers.set('authorization', 'Basic ${token}')
    // });
    // return next.handle(xhr);
    return next.handle(AuthRequest).pipe(catchError((err: any, caught) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.info('err.error =', err.error, ';');
              this.route.navigateByUrl('');
              this.cookieService.deleteAll('/');
            }
            return Observable.throw(err);
          }
        }));
  }
}
