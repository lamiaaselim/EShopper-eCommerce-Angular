import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IColor } from '../interfaces/IColor';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  _urlApi = "http://localhost:8080/ElShopper/api/color"

  constructor(private http:HttpClient) { }

  getAllColors ():Observable<IColor[]>
  {
    return this.http.get<IColor[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  getColorById (id: number):Observable<IColor[]>
  {
    return this.http.get<IColor[]> (`${this._urlApi}/${id}`).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }


}
