import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ]
})
export class SpinnerComponent {

}
