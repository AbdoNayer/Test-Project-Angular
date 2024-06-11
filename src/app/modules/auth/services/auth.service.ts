import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.URL_Fake;
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  // sginIn(data: any): Observable<any> {
  //   console.log('data', data)
  //   const header:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  //   header.set("Access-Control-Allow-Origin", `http://localhost:4200/`)
    
  //   return this.http.post<any>(`${this.BASE_URL}login`, 
  //   {
  //     "email": "fd@gmail.com",
  //     "userName": "userName",
  //     "verified": true,
  //     "blocked": false,
  //     "password": "wed"
  // }
  // , {headers: header});
  // }

  sginIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}auth/login`, data);
  }

  sginUp(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signup`, data);
  }
  
}
