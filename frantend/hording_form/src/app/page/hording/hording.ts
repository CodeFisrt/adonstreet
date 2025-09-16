import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hoarding',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './hording.html',
  styleUrls: ['./hording.css']     
})
export class Hoarding {
  hoarding = {
    h_name: '',
    address: '',
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    size: '',
    owner_name: '',
    contact_person: '',
    contact_number: '',
    ad_start_date: '',
    ad_end_date: '',
    status: 'Available',
    rental_cost: 0,
    contract_start_date: '',
    contract_end_date: '',
    notes: '',
    created_at: new Date().toISOString()
  };

  hoardings: any[] = [];

  private apiUrl = 'http://localhost:3000/hoardings';

  constructor(private http: HttpClient) {
    this.getData();
  }

  onSubmit() {
    if (!this.hoarding.h_name || !this.hoarding.city || !this.hoarding.state) {
      alert("Please fill all required fields.");
      return;
    }

    this.http.post(this.apiUrl, this.hoarding).subscribe({
      next: () => {
        alert('Hoarding saved successfully');
        this.resetForm();
        this.getData();
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to save hoarding');
      }
    });
  }

  resetForm() {
    this.hoarding = {
      h_name: '',
      address: '',
      city: '',
      state: '',
      latitude: '',
      longitude: '',
      size: '',
      owner_name: '',
      contact_person: '',
      contact_number: '',
      ad_start_date: '',
      ad_end_date: '',
      status: 'Available',
      rental_cost: 0,
      contract_start_date: '',
      contract_end_date: '',
      notes: '',
      created_at: new Date().toISOString()
    };
  }

  getData() {
    this.http.get(this.apiUrl).subscribe({
      next: (res: any) => (this.hoardings = res),
      error: (err) => console.error('Error fetching hoardings:', err)
    });
  }
}
