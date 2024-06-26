import { Component, Input } from '@angular/core';
import { ToasterService } from '../../../../shared/services/toaster.service';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.scss'
})
export class ItemProductComponent {
  @Input() item: any;
  cartProducts:any[] = [];

  constructor(private toasterService: ToasterService,
              private translate : TranslateService,
              private homeService: HomeService ) {

    }

  ngOnInit(): void {
  }

  addCart(item:any){
    var messageError      = (this.translate.currentLang == 'en') ? 'This Item exist Cart' : 'هذا المنتج موجود بالفعل';
    var messageSuccess    = (this.translate.currentLang == 'en') ? 'This Item Add To Cart' : 'تم اضافه المنتج بنجاح';
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart"))
      const exist = this.cartProducts.find(val => val.id == item.id);
      if(exist){
        this.toasterService.error(messageError);
      }else {
        this.toasterService.success(messageSuccess);
        this.cartProducts.push(item);
        
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
        this.homeService.counter.next(this.cartProducts.length);
      }
    }else {
      this.toasterService.success(messageSuccess);
      this.cartProducts.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
      this.homeService.counter.next(this.cartProducts.length);


    }
  }
}
