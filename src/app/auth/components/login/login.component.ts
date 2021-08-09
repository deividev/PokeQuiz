import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData =
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
        res => {
          console.log(res);
          localStorage.setItem('token', res.jwt)
        },
        error => console.log(error)
      )
  }
}
