// api.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    const apiReq = req.clone({
      setHeaders: {
        'chrome-proxy': 'block'  
      }
    });

    return next.handle(apiReq);
  }

}