import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root'
})
export class OfferReviewService {

  constructor(private http: HttpClient,
              private api: GlobalService) { }

  private apiRev:String = `${this.api.host}/reviews`;
       
  // REVIEW API
  // GET ALL
  // getReviews():Observable<any> {
  //   return this.http.get(`${this.apiRev}`);
  // }
  // GET ONE
  getReviews(offer_id):Observable<any> {
    return this.http.get(`${this.apiRev}/${offer_id}`);
  }
  // POST
  setReview(review):Observable<any> {
    return this.http.post(`${this.apiRev}`,review);
  }
  // PUT
  updateReview(id,review):Observable<any> {
    return this.http.put(`${this.apiRev}/${id}`,review);
  }

  // RATE API
  private apiRat:String = `${this.api.host}/rates`;
  // GET ALL
  // getRates():Observable<any> {
  //   return this.http.get(`${this.apiRat}`);
  // }
  // GET ONE
  getRates(offer_id):Observable<any> {
    return this.http.get(`${this.apiRat}/${offer_id}`);
  }
  // POST
  setRate(rate):Observable<any> {
    return this.http.post(`${this.apiRat}`,rate);
  }
  // PUT
  updateRate(id,rate):Observable<any> {
    return this.http.put(`${this.apiRat}/${id}`,rate);
  }

}
