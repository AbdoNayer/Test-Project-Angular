import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrl: './slider-home.component.scss'
})
export class SliderHomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    navSpeed: 700,
    nav: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  slides = [
    {
      id: 1,
      image : '../../../../assets/img/0001.jpg',
      info: {
        title : 'Fashion Item 1',
        dis : 'Description for Fashion Item 1',
        btn : 'More'
      }
    },
    {
      id: 2,
      image : '../../../../assets/img/0002.jpg',
      info: {
        title : 'Fashion Item 2',
        dis : 'Description for Fashion Item 2',
        btn : 'More'
      }
    },
    {
      id: 3,
      image : '../../../../assets/img/0003.jpg',
      info: {
        title : 'Fashion Item 3',
        dis : 'Description for Fashion Item 3',
        btn : 'More'
      }
    },
    {
      id: 4,
      image : '../../../../assets/img/0004.jpg',
      info: {
        title : 'Fashion Item 4',
        dis : 'Description for Fashion Item 4',
        btn : 'More'
      }
    }
  ]
}
