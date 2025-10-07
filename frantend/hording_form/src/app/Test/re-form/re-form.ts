import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-re-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './re-form.html',
  styleUrl: './re-form.css'
})
export class ReForm {
userData:any[]=[];
  myForm:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required,]),
    Deparment:new FormControl("",[Validators.required]),
    salary:new FormControl("",[Validators.min(30000)])
  })
  submit(){
    const formdata =this.myForm.value;
   this.userData.push(formdata)
   alert("added succesfully")
   console.log(formdata);
   
  }
  
}
