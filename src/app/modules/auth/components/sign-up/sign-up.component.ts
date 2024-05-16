import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/login';
import { confirmPasswordValidator } from '../../validations/app-validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SginUpComponent implements OnInit {
  signUpForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group(
      {
        first_name: ['', [Validators.required, Validators.minLength(4)]],
        last_name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordValidator,
      }
    );
  }
  //Object assign
  onSubmit() {
    this.authService.sginUp(this.signUpForm.value).subscribe(
      (response) => {
        // Handle successful login response
      },
      (error) => {
        // Handle login error
      }
    );
  }
}
