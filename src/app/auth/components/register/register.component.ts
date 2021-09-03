import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formRegister: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.formRegister = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }


  registerUser(): void {
    this.resgisterUserData.username = this.formRegister.controls['username'].value;
    this.resgisterUserData.email = this.formRegister.controls['email'].value;
    this.resgisterUserData.password = this.formRegister.controls['password'].value;
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
