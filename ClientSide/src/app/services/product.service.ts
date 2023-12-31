import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

// decorator to provide info about using services in all components
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _urlApi = "https://e-shopper-pvok.onrender.com/ElShopper/api/product"


  constructor(private http:HttpClient) { }


  getAllProduct ():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  fetchAllProduct (page: number):Observable<IProduct[]>
  {
    return this.http.get<IProduct[]> (this._urlApi + '?page' + page).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  getProductById (id: number):Observable<IProduct[]>
  {
    return this.http.get<IProduct[]> (`${this._urlApi}/${id}`).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }


}
