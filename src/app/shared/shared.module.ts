import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ItemBlogComponent } from './components/item-blog/item-blog.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';



@NgModule({
  declarations: [
    ItemBlogComponent,
    SliderHomeComponent
  ],
  exports: [
    ItemBlogComponent,
    SliderHomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharedModule { }
