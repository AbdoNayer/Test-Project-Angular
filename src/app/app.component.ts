import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import 'aos/dist/aos.css';
//For Translation
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  constructor(private translate : TranslateService, private router: Router){
    if(!localStorage.getItem('langShopping') || localStorage.getItem('langShopping') === 'en')
    {
      document.body.setAttribute("dir", "ltr");
      translate.setDefaultLang('en');
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }else{
      document.body.setAttribute("dir", "rtl");
      translate.setDefaultLang('ar');
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    }
  }

  ngOnInit() {
    AOS.init();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
  
}
