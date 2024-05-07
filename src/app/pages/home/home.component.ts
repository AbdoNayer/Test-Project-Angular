import { Component, OnInit } from '@angular/core';
import { product } from './models/home';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  items = new BehaviorSubject<product[]>([]);
  imageSlider = [];
  options = [
    {
      value : 'all',
      name : 'الكل'
    },
    {
      value : 'smartphones',
      name : 'الهواتف'
    },
    {
      value : 'اللاب توب',
      name : 'laptops'
    },
    {
      value : 'skincare',
      name : 'العناية بالبشرة'
    },
    {
      value : 'fragrances',
      name : 'العطور'
    },
  ];
  toastValue = 'error'

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getImageSlider();
    this.getItems();
  }

  getImageSlider() {
    this.homeService.getSliderHome().subscribe(
      (response) => {
        // Handle successful response
        this.imageSlider = response.images;
      },
      (error) => {
        // Handle error
        console.error('error', error);
      }
    );
  }

  getItems() {
    this.homeService.getItems().subscribe(
      (response) => {
        // Handle successful response
        this.items = response.products;
      },
      (error) => {
        // Handle error
        console.error('error', error);
      }
    );
  }

  getProductsBySearch(option: string): void {
    this.homeService.searchProducts(option).subscribe(
      (response) => {
        // Handle successful response
        this.items = response.products;
      },
      (error) => {
        // Handle error
        console.error('error', error);
      }
    );
  }

  onSelectOption(option: string): void {
    if(option === 'all'){
      this.getItems()
    }else {
      this.getProductsBySearch(option)
    }
  }

}
