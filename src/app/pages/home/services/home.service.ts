import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl      = environment.BASE_URL;
  private apiUrlJSON  = environment.URL_JSON;

  constructor(private http: HttpClient) {}

  getSliderHome(): Observable<any> {
    return this.http.get(this.apiUrlJSON);
  }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}products`);
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}products/category/${query}`);
  }
}
