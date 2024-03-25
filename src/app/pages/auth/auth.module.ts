import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SginInComponent } from './components/sgin-in/sgin-in.component';
import { SginUpComponent } from './components/sgin-up/sgin-up.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: 'sgin-in',
    component: SginInComponent,
  },
  {
    path: 'sgin-up',
    component: SginUpComponent,
  },
];

@NgModule({
  declarations: [SginInComponent, SginUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}
