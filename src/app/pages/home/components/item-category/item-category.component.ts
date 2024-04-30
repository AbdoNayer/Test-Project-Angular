import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss'
})
export class ItemCategoryComponent {

  @Input() item: any;

  constructor() {}

  ngOnInit(): void {
  }

  

}
