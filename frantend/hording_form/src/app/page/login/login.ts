import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class login {
  user = {
    name: '',
    email: '',
    password: ''
  };

  userData: any[] = [];

 
  private apiUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient,private router: Router) {
    this.getData();
  }

  onSubmit() {
    this.http.post(this.apiUrl, this.user).subscribe({
      next: (res: any) => {
        console.log('Response:', res);
        alert('User saved successfully');
        this.router.navigateByUrl('/hoarding');
        this.user = { name: '', email: '', password: '' }; 
        this.getData(); 
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to save user');
      }
    });
  }

  getData() {
    this.http.get(this.apiUrl).subscribe({
      next: (res: any) => {
        this.userData = res;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
