import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../validations/app-validators';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrl: './sgin-up.component.scss',
})
export class SginUpComponent implements OnInit {

  signUpForm: FormGroup;

  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      // Form is valid, proceed with submission
      console.log(this.signUpForm.value);
      // Here you can send the form data to your backend or perform other actions
    } else {
      // Form is invalid, display validation errors
      // Angular will automatically display validation errors in the template
    }
  }
}

