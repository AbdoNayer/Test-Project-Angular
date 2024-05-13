import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss'
})
export class ItemCategoryComponent {

  @Input() item: any;
  @Output() getValue = new EventEmitter<string>();

  active:any = '';

  constructor() {}

  ngOnInit(): void {
  }

  onGetValue(val:any){
    this.getValue.emit(val);
    this.active = val;
  }

}
