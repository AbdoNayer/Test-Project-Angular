import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/login';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  user = new User();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.initForm();

  }

  initForm(){
    this.forgetPasswordForm = this.fb.group({
      email                 : ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      
      console.log(this.forgetPasswordForm.value);
      
    } else {
      
    }
  }

}
