import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ItemBlogComponent } from './components/item-blog/item-blog.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';



@NgModule({
  declarations: [
    ItemBlogComponent,
    SliderHomeComponent,
    LoadingPageComponent
  ],
  exports: [
    ItemBlogComponent,
    SliderHomeComponent,
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharedModule { }
