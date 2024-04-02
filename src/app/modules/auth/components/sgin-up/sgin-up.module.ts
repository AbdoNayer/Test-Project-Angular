import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SginUpComponent } from './sgin-up.component';

export const routes: Routes = [
  {
    path: '',
    component: SginUpComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SginUpModule { }
