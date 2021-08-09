import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth/services/auth-service.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router, private authService: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(this.authService);
    let req = request;

    if (authService.getToken()) {
      req = request.clone(  {
        setHeaders: {
          authorization: `Bearer ${authService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
