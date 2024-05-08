import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundPageComponent } from './not-found-page.component';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    SharedModule, 
    CommonModule, 
    RouterModule.forChild(routes),
    TranslateModule
  ],
})
export class NotFoundPageModule {}
