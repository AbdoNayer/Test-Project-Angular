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
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-right"></i>', '<i class="fa-solid fa-chevron-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides = [
    {
      id: 1,
      image : 'https://img.freepik.com/premium-vector/background-with-colorful-shopping-bags-vector-illustration-sale-discount-concept_653240-59.jpg'
    }
  ]
}
