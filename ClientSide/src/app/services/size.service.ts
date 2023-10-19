import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ISize } from './../interfaces/ISize';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  _urlApi = "https://e-shopper-pvok.onrender.com/api/size"

  constructor(private http:HttpClient) { }

  getAllSizes ():Observable<ISize[]>
  {
    return this.http.get<ISize[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  getSizeById (id: number):Observable<ISize[]>
  {
    return this.http.get<ISize[]> (`${this._urlApi}/${id}`).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

}
