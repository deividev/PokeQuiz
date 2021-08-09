import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './../../auth/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }


  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true
    }
    else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
