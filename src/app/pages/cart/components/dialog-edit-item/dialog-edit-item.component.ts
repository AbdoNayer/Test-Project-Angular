import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-item',
  templateUrl: './dialog-edit-item.component.html',
  styleUrl: './dialog-edit-item.component.scss',
})
export class DialogEditItemComponent {
  setLang = localStorage.getItem('langShopping');
  constructor(
    public dialogRef: MatDialogRef<DialogEditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item
  ) {}

  ngOnInit() {}
}
