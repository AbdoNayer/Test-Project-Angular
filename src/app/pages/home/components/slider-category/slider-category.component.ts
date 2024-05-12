import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-category',
  templateUrl: './slider-category.component.html',
  styleUrl: './slider-category.component.scss'
})
export class SliderCategoryComponent {

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

  @Input() slide: any;


  constructor() {}

  ngOnInit(): void {
    console.log('mmmm', this.slide.value)
  }

  
}
