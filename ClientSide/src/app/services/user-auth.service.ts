import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from './../interfaces/IUser';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  _urlApi = "https://e-shopper-pvok.onrender.com/api/login";

  constructor(private http:HttpClient) { }

  authLogin(userEmail: string, userPassword: string): Observable<IUser> {
    const userData = {
      email: userEmail,
      password: userPassword
    };

    return this.http.post<IUser>(this._urlApi, userData).pipe(
      catchError((error) => {
        return throwError(() => error.message || "Server Error");
      })
    );
  }

  logIn(userEmail: string, userPassword: string)
  {
    // call login api, get access token of user
    let userToken = "123456789";
    localStorage.setItem("token", userToken)
  }
  logOut()
  {
    localStorage.removeItem("token")
  }
  // when you add get before fun, it becomee a readonly property
  get isUserLoggedIn (): boolean
  {
    return (localStorage.getItem("token")) ?true : false;

  }
}
