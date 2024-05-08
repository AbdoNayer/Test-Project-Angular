import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrl: './empty-data.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ]
})
export class EmptyDataComponent {

}
