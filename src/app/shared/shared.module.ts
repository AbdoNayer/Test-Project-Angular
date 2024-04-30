import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';



@NgModule({
  declarations: [
    LoadingPageComponent
  ],
  exports: [
    LoadingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
