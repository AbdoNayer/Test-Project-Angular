import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() toastValue;
  ngOnInit(): void {
    console.log('toastValue', this.toastValue)
  }
}
