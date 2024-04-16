import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrl: './sgin-in.component.scss'
})
export class SginInComponent implements OnInit {

  sginInForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {

    this.initForm();

  }

  initForm(){
    this.sginInForm = this.fb.group({
      email                 : ['', [Validators.required, Validators.email]],
      password              : ['', [Validators.required]],
    });
  }

  onSubmit() {
    const obj = {
      username: 'kminchelle',
      password: '0lelplR',
      expiresInMins: 30,
    };
    this.authService.sginIn(obj).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful', response);
      },
      (error) => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }

}
