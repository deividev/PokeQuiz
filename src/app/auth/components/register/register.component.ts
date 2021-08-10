import { Component, OnInit } from '@angular/core';
import { AuthResponse, RegisterRequest } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  resgisterUserData: RegisterRequest =
  {
    "username": "papa",
    "email": "papa@paco.io",
    "password": "Test1895"
  };

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.authService.registerUser(this.resgisterUserData)
      .subscribe(
        (res: AuthResponse) => {
          console.log(res);
          localStorage.setItem('token', res.jwt)
        },
        error => console.log(error)
      )
  }

}
