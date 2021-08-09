import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  registerUser(user): any {
    return this.http.post<any>(environment.regiterStrapi, user);
  }

  loginUser(user): any {
    return this.http.post<any>(environment.loginStrapi, user);
  }

  loggedIn(): any {
    return !!localStorage.getItem('token');
  }

  // getToken(): any {
  //   return localStorage.getItem('token');
  // }
}
