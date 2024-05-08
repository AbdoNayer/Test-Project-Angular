import { Component } from '@angular/core';
import { SaveUserService } from './services/save-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(
    private saveUserService: SaveUserService,
    private router: Router
  ) {

  }
ngOnInit(): void {

  // check if logged in
  if (this.saveUserService.currentUser.getValue() != null ) {
    this.router.navigate(['/']);
  }

}
}
