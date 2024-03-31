import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SginInComponent } from './sgin-in.component';

export const routes: Routes = [
  {
    path: '',
    component: SginInComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SginInModule {}
