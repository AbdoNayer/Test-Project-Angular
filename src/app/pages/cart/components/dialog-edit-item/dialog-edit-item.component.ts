import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-item',
  templateUrl: './dialog-edit-item.component.html',
  styleUrl: './dialog-edit-item.component.scss',
})
export class DialogEditItemComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item
  ) {}

  ngOnInit() {console.log('item -------------', this.item.item)}

  onNoClick(): void {
    this.dialogRef.close(this.item.item);
  }

  selectFile(event: any) {
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
      console.log('result image -------------', reader.result)
      // this.f['thumbnail'].patchValue(reader.result);
      // this.changeDetectorRef.detectChanges();
		}
	}

}
