import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { catchError, tap } from 'rxjs/operators';
import{HttpService} from '../services/http.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Injectable()
export class PrimaryInterceptor implements HttpInterceptor {

   TokenResponse:Token;
  constructor(private injector:Injector,private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    let authService=this.injector.get(HttpService);

    const token: string = authService.getToken();

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
  }

  if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
  }

  request = request.clone({ headers: request.headers.set('Accept', 'application/json') });




  return next.handle(request).pipe(catchError(err => {

    // onError
    if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
            //refreshToken
             alert('refresh Token');
        }

        if(err.status===500)
        {
          alert('Internal Server Error 500');
        }

    }
    return Observable.throw(err);
}) as any);


   }
}
