import { Component } from '@angular/core';
import { SaveUserService } from '../../../modules/auth/services/save-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLogin:boolean = false;
  constructor(private _SaveUserService: SaveUserService){

    _SaveUserService.currentUser.subscribe(() => {
      if(_SaveUserService.currentUser.getValue() != null){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    });

  }

}
