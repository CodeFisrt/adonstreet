import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  signInForm: FormGroup;
  errorMessage: string = '';

  // static user for demo
  private demoUser = {
    email: 'admin@gmail.com',
    password: '123456'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      this.errorMessage = 'Please enter valid credentials.';
      return;
    }

    const { email, password } = this.signInForm.value;

    if (email === this.demoUser.email && password === this.demoUser.password) {
      localStorage.setItem('token', 'static-demo-token-123');
       this.router.navigateByUrl('/dashboard') // redirect after success
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
