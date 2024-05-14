import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { DialogRemoveItemComponent } from './components/dialog-remove-item/dialog-remove-item.component';
import { DialogEditItemComponent } from './components/dialog-edit-item/dialog-edit-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyDataComponent } from '../../shared/components/empty-data/empty-data.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

@NgModule({
  declarations: [CartComponent, DialogRemoveItemComponent, DialogEditItemComponent],
  imports: [
    CommonModule,
    EmptyDataComponent,
    MatDialogModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
})
export class CartModule {}
