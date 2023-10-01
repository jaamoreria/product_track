import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class ServiceInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers= new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', 'Basic ' + btoa('candidate:supersecret'));

      const clonedRequest = req.clone({ headers: headers });
      return next.handle(clonedRequest);
    }
  }