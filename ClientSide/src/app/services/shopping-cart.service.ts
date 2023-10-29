import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {IShoppingCart, IShoppingCartItem} from '../interfaces/IShoppingCart'
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  _urlApi = "https://e-shopper-pvok.onrender.com/ElShopper/api/cart"

  constructor(private http:HttpClient) { }

  getAllCartItems ():Observable<IShoppingCart[]>
  {
    return this.http.get<IShoppingCart[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  addCartItem(item: IShoppingCartItem): Observable<IShoppingCart[]> {
    // Assuming you have a valid item object to send to the server.
    return this.http.post<IShoppingCart[]>(this._urlApi, item).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'Server Error');
      })
    );
  }

}
