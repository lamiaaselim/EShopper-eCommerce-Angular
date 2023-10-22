import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  _urlApi = "https://e-shopper-pvok.onrender.com/ElShopper/api/category"


  constructor(private http:HttpClient) { }


  getAllCategories ():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }
}
