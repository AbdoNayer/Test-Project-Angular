import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl            = environment.BASE_URL;
  private apiUrlJSON        = environment.URL_JSON;
  counterValue              = JSON.parse(localStorage.getItem('counter'));
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(this.counterValue);

  constructor(private http: HttpClient,
  ) {}

  getSliderImages(): Observable<any> {
    return this.http.get(this.apiUrlJSON);
  }

  getItemsCategories(): Observable<any> {
    return this.http.get(this.apiUrlJSON);
  }

  getItemsProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}products`);
  }

  searchProductsByCategory(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products/category/${query}`);
  }
}
