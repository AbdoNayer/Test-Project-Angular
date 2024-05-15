import { Component } from '@angular/core';
import { ToasterService } from '../../shared/services/toaster.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRemoveItemComponent } from './components/dialog-remove-item/dialog-remove-item.component';
import { DialogEditItemComponent } from './components/dialog-edit-item/dialog-edit-item.component';

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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onRemoveItem(item): void {
    const dialogRef = this.dialog.open(DialogRemoveItemComponent, {
      width: '400px',
      data: { item },
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
      }
    });
  }

  onEditItem(item): void {
    const dialogRef = this.dialog.open(DialogEditItemComponent, {
      width: '700px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }

  removeAllCart():void {
    // Set Data New To LocalStorage & Table List
    localStorage.removeItem('cart');
    this.cartProducts = [];
    var messageSuccess =
          this.translate.currentLang == 'en'
            ? 'Items Successfully Deleted'
            : 'تم حذف كل المنتجات بنجاح';
        // Toaster
        this.toasterService.success(messageSuccess);
  }
}
