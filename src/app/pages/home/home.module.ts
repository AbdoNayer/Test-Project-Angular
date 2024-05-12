import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { SliderCategoryComponent } from './components/slider-category/slider-category.component';
import { EmptyDataComponent } from '../../shared/components/empty-data/empty-data.component';
import { ItemProductComponent } from './components/item-product/item-product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ItemCategoryComponent, SliderCategoryComponent, ItemProductComponent],
  imports: [
    CarouselModule,
    TranslateModule,
    CommonModule,
    EmptyDataComponent,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule {}
