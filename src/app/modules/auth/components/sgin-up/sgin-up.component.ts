import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/login';
import { confirmPasswordValidator } from '../../validations/app-validators';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrl: './sgin-up.component.scss'
})

export class SginUpComponent implements OnInit {

  sginUpForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.initForm();

  }

  initForm(){
    this.sginUpForm = this.fb.group({
      first_name            : ['', [Validators.required, Validators.minLength(4)]],
      last_name             : ['', [Validators.required, Validators.minLength(4)]],
      email                 : ['', [Validators.required, Validators.email]],
      password              : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword       : ['', Validators.required]
    }, { validator: confirmPasswordValidator('password', 'confirmPassword') });
  }

  onSubmit() {
    if (this.sginUpForm.valid) {
      // Form is valid, proceed with submission
      console.log(this.sginUpForm.value);
      // Here you can send the form data to your backend or perform other actions
    } else {
      // Form is invalid, display validation errors
      // Angular will automatically display validation errors in the template
    }
  }

}
