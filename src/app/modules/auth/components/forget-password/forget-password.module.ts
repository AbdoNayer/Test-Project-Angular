import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';

export const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ForgetPasswordModule { }
