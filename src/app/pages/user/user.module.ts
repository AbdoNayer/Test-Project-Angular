import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent, UpdateProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
