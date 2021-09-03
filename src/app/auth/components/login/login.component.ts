import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    "identifier": "deivid@gmail.com",
    "password": "test123456789"
  };;

  formLogin: FormGroup;

  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }


  loginUser(): void {
    this.loginUserData.identifier = this.formLogin.controls['email'].value;
    this.loginUserData.password = this.formLogin.controls['password'].value;
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        (res: AuthResponse) => {
          console.log(res);
          localStorage.setItem('token', res.jwt);
          this.router.navigate(['/home']);
        },
        error => console.log(error)
      )
  }


}
