import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http:HttpClient) { }

  sumoftwo(num1: number, num2: number) {
    let sum = num1 + num2;
    console.log("sum is", sum);
    
  }
  getdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
