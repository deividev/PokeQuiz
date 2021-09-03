import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponse, ResetPasswordRequest } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordUserData: ResetPasswordRequest =
  {
    "email": "papa@paco.io",

  }
  formReset: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.formReset = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }


  resetPassword(): void {
    this.resetPasswordUserData.email = this.formReset.controls['email'].value;
    this.authService.resetPasswordUser(this.resetPasswordUserData)
      .subscribe(
        (res: AuthResponse) => {
          console.log(res);
          localStorage.setItem('token', res.jwt)
        },
        error => console.log(error)
      )
  }

}
