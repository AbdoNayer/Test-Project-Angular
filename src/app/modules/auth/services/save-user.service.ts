import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  currentUser = new BehaviorSubject(null);

  constructor(private router: Router) {

    if(localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
    }

  }

  saveCurrentUser(){
    const token:any = localStorage.getItem('userToken');
    console.log(jwtDecode(token));
    
    this.currentUser.next(jwtDecode(token));
  }

  logOut(){
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this.router.navigate(['auth/sgin-in'])
  }

}
