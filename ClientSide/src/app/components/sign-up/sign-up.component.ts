import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,  AbstractControl, ValidatorFn, } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

})

export class SignUpComponent implements OnInit{
  passwordInput:any = ''
  confirmPasswordInput:any = ''

  SignUpForm = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]] ,
    phone: ['', [Validators.required, Validators.minLength(11)]] ,
    email: ['', [Validators.required , Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)]],
    password: ['', [Validators.required, Validators.minLength(5)]] ,
    confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordInput)]] ,
  });

  constructor (private fb: FormBuilder) {}
  ngOnInit (): void {}

  get name () {
    return this.SignUpForm.get('name');
  }
  get phone () {
    return this.SignUpForm.get('phone');
  }
  get email () {
    return this.SignUpForm.get('email');
  }
  get password () {
    return this.SignUpForm.get('password');
  }
  get confirmPassword () {
    return this.SignUpForm.get('confirmPassword');
  }


  machedPassword(){
    let HasError = '';
    const passwordInput  = this.SignUpForm.get('password');
    const confirmPasswordInput = this.SignUpForm.get('confirmpassword');
    if (passwordInput === confirmPasswordInput) {
      HasError = '';
    } HasError =  "Confirm password must match password";
  }


}
