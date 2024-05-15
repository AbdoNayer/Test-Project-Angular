import { Component } from '@angular/core';
import { ToasterService } from '../../shared/services/toaster.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRemoveItemComponent } from './components/dialog-remove-item/dialog-remove-item.component';
import { DialogEditItemComponent } from './components/dialog-edit-item/dialog-edit-item.component';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartProducts: any[] = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  constructor(
    private toasterService: ToasterService,
    private translate: TranslateService,
    public dialog: MatDialog,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {}

  onRemoveItem(item): void {
    const dialogRef = this.dialog.open(DialogRemoveItemComponent, {
      width: '400px',
      data: { item, title : this.translate.currentLang == 'en' ? 'Do You Want Delete this Item ?' : 'هل تريد حذف المنتج ؟' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Get Data From LocalStorage
        const itemProducts = JSON.parse(localStorage.getItem('cart'));
        // Filter Data To Remove Item From List
        const updatedData = itemProducts.filter((item) => item.id !== result);
        // Set Data New To LocalStorage & Table List
        localStorage.setItem('cart', JSON.stringify(updatedData));
        this.cartProducts = updatedData;
        // Toaster Message
        var messageSuccess =
          this.translate.currentLang == 'en'
            ? 'Item Successfully Deleted'
            : 'تم حذف المنتج بنجاح';
        // Toaster
        this.toasterService.success(messageSuccess);
        localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
        this.homeService.counter.next(this.cartProducts.length);

      }
    });

  }

  onEditItem(item): void {
    const dialogRef = this.dialog.open(DialogEditItemComponent, {
      width: '700px',
      data: { item, title : this.translate.currentLang == 'en' ? 'Edit Product' : 'تعديل المنتج' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }

  removeAllCart():void {
    const dialogRef = this.dialog.open(DialogRemoveItemComponent, {
      width: '400px',
      data : { 
        title : this.translate.currentLang == 'en' ? 'Do You Want Delete All Products ?' : 'هل تريد حذف كل  المنتجات ؟'
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Remove All Products To LocalStorage & Table List
        localStorage.removeItem('cart');
        this.cartProducts = [];
        var messageSuccess = this.translate.currentLang == 'en' ? 'Products Successfully Deleted' : 'تم حذف كل المنتجات بنجاح';
        // Toaster
        this.toasterService.success(messageSuccess);
        localStorage.setItem('counter', JSON.stringify(this.cartProducts.length));
        this.homeService.counter.next(this.cartProducts.length);

      }
      
    });
    
  }
}
