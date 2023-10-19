import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IReview } from './../interfaces/IReview';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  _urlApi = "https://e-shopper-pvok.onrender.com/ElShopper/api/review"

  constructor(private http:HttpClient) { }

  getAllReviews ():Observable<IReview[]>
  {
    return this.http.get<IReview[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  reviewsForProduct (id: number):Observable<IReview[]>
  {
    return this.http.get<IReview[]> (`${this._urlApi}/${id}`).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

}
