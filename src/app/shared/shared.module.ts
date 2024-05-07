import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    LoadingPageComponent,
    SpinnerComponent,
    EmptyDataComponent,
    ToastComponent
  ],
  exports: [
    LoadingPageComponent,
    SpinnerComponent,
    EmptyDataComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
