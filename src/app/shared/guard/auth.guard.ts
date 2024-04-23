import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SaveUserService } from '../../modules/auth/services/save-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private saveUserService: SaveUserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.saveUserService.currentUser.getValue() != null ) {
        console.log('dddddddddddddddddddddddd')
        // this.router.navigate(['/']);
        return true;
      }else{
        console.log('nnnnnnnnnnnnnnnnnnnnnnnn')
        this.router.navigate(['auth/sgin-in']);
        return false;
      }
  }
}
