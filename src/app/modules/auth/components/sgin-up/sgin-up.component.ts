import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/login';
import { confirmPasswordValidator } from '../../validations/app-validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrl: './sgin-up.component.scss'
})

export class SginUpComponent implements OnInit {

  sginUpForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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
    },
    {
      validator: confirmPasswordValidator
    });
  }

  onSubmit() {
    this.authService.sginUp(this.sginUpForm.valid).subscribe(
      response => {
        // Handle successful login response
        console.log('Login successful', response);
      },
      error => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }

}
