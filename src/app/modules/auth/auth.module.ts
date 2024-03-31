import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SginInComponent } from './components/sgin-in/sgin-in.component';
import { AuthComponent } from './auth.component';
import { SginUpComponent } from './components/sgin-up/sgin-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'sgin-in',
        pathMatch: 'full',
      },
      {
        path: 'sgin-in',
        loadChildren: () =>
          import('./components/sgin-in/sgin-in.module').then(
            (m) => m.SginInModule
          ),
      },
      {
        path: 'sgin-up',
        loadChildren: () =>
          import('./components/sgin-up/sgin-up.module').then(
            (m) => m.SginUpModule
          ),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./components/forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    AuthComponent,
    SginInComponent,
    SginUpComponent,
    ForgetPasswordComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
