import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IReview } from './../interfaces/IReview';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  _urlApi = "http://localhost:8080/ElShopper/api/review"

  constructor(private http:HttpClient) { }

  getAllReviews ():Observable<IReview[]>
  {
    return this.http.get<IReview[]> (this._urlApi).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  getReviewById (id: number):Observable<IReview[]>
  {
    return this.http.get<IReview[]> (`${this._urlApi}/${id}`).pipe(catchError((error) => {
      return throwError(() => {error.message || "Server Error"})
    }))
  }

  getReviewsForProduct(productId: string): Observable<IReview[]> {
    // Make an HTTP GET request to fetch reviews for a specific product ID
    const url = `${this._urlApi}/?productId=${productId}`;
    // Assuming your API returns an array of Review objects
    return this.http.get<IReview[]>(url);
  }

}