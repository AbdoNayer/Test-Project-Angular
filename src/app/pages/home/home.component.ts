import { Component, OnInit } from '@angular/core';
import { product } from './models/home';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './services/home.service';
import dataApi from '../../../assets/JSON_API/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  items = new BehaviorSubject<product[]>([]);
  imageSlider = [];
  categorys = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getImageSlider();
    this.getItems();
  }

  getImageSlider() {
    this.homeService.getSliderHome().subscribe(
      (response) => {
        // Handle successful response
        this.categorys = response.sliderCategory;
        console.log('response', response.sliderCategory)
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
        this.items.next(response.products);
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
        this.items.next(response.products);
      },
      (error) => {
        // Handle error
        console.error('error', error);
      }
    );
  }

  onGetProductByCategory(val: string): void {
    if(val === 'all'){
      this.getItems()
    }else {
      this.getProductsBySearch(val)
    }
  }

}
