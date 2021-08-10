import { Component, OnInit } from '@angular/core';
import { AuthResponse, LoginRequest } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: LoginRequest =
  {
    "identifier": "user@strapi.io",
    "password": "Test1895"
  };;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }


  loginUser(): void {
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        (res: AuthResponse) => {
          console.log(res);
          localStorage.setItem('token', res.jwt)
        },
        error => console.log(error)
      )
  }
}
