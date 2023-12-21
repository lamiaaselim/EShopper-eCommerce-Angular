import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from './../../services/user-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  isUserLogged : boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder,
    private UserAuthService: UserAuthService) { }
  ngOnInit(): void {
    this.isUserLogged = this.UserAuthService.isUserLoggedIn;
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  logIn() {
    const userEmail = this.loginForm.get('email')?.value as string;
    const userPassword = this.loginForm.get('password')?.value as string;

    if (userEmail && userPassword) {
      this.UserAuthService.authLogin(userEmail, userPassword).subscribe(
        (response) => {
          // Handle the authentication response here
        },
        (error) => {
          // Handle the error here
        }
      );
    } else {
      console.error('Email or password is missing');
    }
  }
  logOut() {
    this.UserAuthService.logOut()
    this.isUserLogged = this.UserAuthService.isUserLoggedIn;
    // this.router.navigate(['/login']);
  }
}
