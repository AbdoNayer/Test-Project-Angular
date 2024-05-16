import { Component } from '@angular/core';
import { SaveUserService } from '../../../modules/auth/services/save-user.service';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../../pages/home/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLogin: boolean = false;
  setLang = localStorage.getItem('langShopping');
  valueCartItem;

  constructor(
    private _SaveUserService: SaveUserService,
    private translate: TranslateService,
    private homeService: HomeService
  ) {
    _SaveUserService.currentUser.subscribe(() => {
      if (_SaveUserService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });

    this.homeService.counter.subscribe((res: any) => {
      this.valueCartItem = res;
    });
  }

  changeLang(lang: any) {
    location.reload();
    localStorage.setItem('langShopping', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    if (lang === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }

  logOut() {
    this._SaveUserService.logOut();
  }
}
