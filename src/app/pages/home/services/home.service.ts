import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getSliderHome(): Observable<any> {
    return this.http.get(`${this.apiUrl}products/1`);
  }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}products`);
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products/category/${query}`);
  }
}
