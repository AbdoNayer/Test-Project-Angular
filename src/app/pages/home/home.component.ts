import { Component, OnInit } from '@angular/core';
import { Products, Slider, Categories } from './models/home';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  itemsProducts           = new BehaviorSubject<Products[]>([]);
  sliderImages            = new BehaviorSubject<Slider[]>([]);
  itemsCategories         = new BehaviorSubject<Categories[]>([]);

  defaultItemCategory = {
    "id"        : 1,
    "title"     : "All",
    "value"     : "all",
    "image"     : "https://icons.veryicon.com/png/o/application/a1/default-application.png"
  }

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getImageSlider();
    this.getProducts();
    this.getCategories();
  }

  getImageSlider() {
    // this.loaderService.showLoader();
    this.homeService.getSliderImages().subscribe(
      {
        next: (response) => {
          this.sliderImages.next(response.sliderCategory);
        },
        error: (err) => {
          console.log('err', err)
        },
        complete: () => {
          
        }
      }
    );
  }

  getProducts() {
    this.homeService.getItemsProducts().subscribe(
      {
        next: (response) => {
          this.itemsProducts.next(response.products);
        },
        error: (err) => {
          console.log('err', err)
        },
        complete: () => {
          
        }
      }
    );
  }

  getCategories() {
    this.homeService.getItemsCategories().subscribe(
      {
        next: (response) => {
          this.itemsCategories.next(response.itemsCategory);
        },
        error: (err) => {
          console.log('err', err)
        },
        complete: () => {
          
        }
      }
    );
  }

  getProductsByCategory(option: string): void {
    this.homeService.searchProductsByCategory(option).subscribe(
      {
        next: (response) => {
          this.itemsProducts.next(response.products);
        },
        error: (err) => {
          console.log('err', err)
        },
        complete: () => {
          
        }
      }
    );
  }

  onGetProductByCategory(val: string): void {
    if(val === 'all'){
      this.getProducts()
    }else {
      this.getProductsByCategory(val)
    }
  }

}
