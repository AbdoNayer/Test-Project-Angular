import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SginInComponent } from './components/sign-in/sign-in.component';
import { SginUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sgin-in',
        component: SginInComponent,
      },
      {
        path: 'sgin-up',
        component: SginUpComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AuthComponent, SginInComponent, SginUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class AuthModule {}
