import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { DialogRemoveItemComponent } from './components/dialog-remove-item/dialog-remove-item.component';
import { DialogEditItemComponent } from './components/dialog-edit-item/dialog-edit-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [DialogRemoveItemComponent, DialogEditItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatDialogModule, TranslateModule],
})
export class CartModule {}
