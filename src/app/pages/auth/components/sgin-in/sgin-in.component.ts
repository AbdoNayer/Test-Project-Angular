import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrl: './sgin-in.component.scss',
})
export class SginInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // Form is valid, proceed with submission
      console.log(this.signInForm.value);
      // Here you can send the form data to your backend or perform other actions
    } else {
      // Form is invalid, display validation errors
      // Angular will automatically display validation errors in the template
    }
  }
}
