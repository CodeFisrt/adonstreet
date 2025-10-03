import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  
  constructor(private http:HttpClient){}
getuserdata(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
}
