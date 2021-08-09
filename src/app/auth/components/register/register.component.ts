import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  resgisterUserData =
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
        res => {
          console.log(res);
          localStorage.setItem('token', res.jwt)
        },
        error => console.log(error)
      )
  }

}
