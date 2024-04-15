import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  sginUp(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/login`, data);
  }

  sginIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/login`, data);
  }
  
}
