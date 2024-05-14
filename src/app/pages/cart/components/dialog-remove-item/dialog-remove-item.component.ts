import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove-item',
  templateUrl: './dialog-remove-item.component.html',
  styleUrl: './dialog-remove-item.component.scss',
})
export class DialogRemoveItemComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close(this.item.item.id);
  }
}
