import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  user = {
    name: '',
    email: '',
    password: ''
  }
  reactiveForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('')
  })
  array: any[] = []
  formSubmit(form: any) {
    // if (form.invalid) {
    // console.log(form);
    this.array.push(form.value);
    console.log(this.array);
    // }
    // form.reset()
    console.log(form);
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
