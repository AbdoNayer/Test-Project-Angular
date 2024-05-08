import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ]
})
export class LoadingPageComponent {

}
