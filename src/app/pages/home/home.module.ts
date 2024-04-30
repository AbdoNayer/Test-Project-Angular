import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { SliderCategoryComponent } from './components/slider-category/slider-category.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ItemCategoryComponent, SliderCategoryComponent],
  imports: [
    SharedModule,
    CarouselModule,
    CommonModule, 
    RouterModule.forChild(routes)
  ],
})
export class HomeModule {}
