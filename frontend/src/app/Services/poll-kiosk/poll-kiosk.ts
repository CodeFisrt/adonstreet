import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-poll-kiosk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './poll-kiosk.html',
  styleUrls: ['./poll-kiosk.css']
})
export class PollKiosk implements OnInit {
  balloons: any[] = [];
  balloonForm!: FormGroup;
  editingId: number | null = null;
  apiUrl = 'http://localhost:8080/balloons';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadBalloons();
    this.initForm();
  }

  initForm() {
    this.balloonForm = this.fb.group({
      b_id:[0],
      b_location_name: ['', Validators.required],
      b_area: ['', Validators.required],
      b_city: ['', Validators.required],
      b_address: [''],
      b_lat: ['', Validators.required],
      b_long: ['', Validators.required],
      b_size: ['', Validators.required],
      b_type: ['', Validators.required],
      b_height: ['', Validators.required],
      b_duration_days: ['', Validators.required],
      b_start_date: ['', Validators.required],
      b_end_date: ['', Validators.required],
      expected_crowd: ['', Validators.required],
      b_contact_person_name: ['', Validators.required],
      b_contact_num: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      b_cost: ['', Validators.required],
      payment_status: ['', Validators.required],
      remarks: ['']
    });
  }

  // ✅ Get all balloons
  loadBalloons() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => (this.balloons = data),
      error: () => this.toastr.error('Failed to load balloons ❌')
    });
  }

  // ✅ Create or Update
  save() {
    if (this.balloonForm.invalid) return;

    if (this.editingId) {
      this.http.put(`${this.apiUrl}/${this.editingId}`, this.balloonForm.value).subscribe({
        next: () => {
          this.loadBalloons();
          this.toastr.success('Balloon updated successfully ✅');
          this.cancel();
        },
        error: () => this.toastr.error('Update failed ❌')
      });
    } else {
      this.http.post(this.apiUrl, this.balloonForm.value).subscribe({
        next: () => {
          this.loadBalloons();
          this.toastr.success('Balloon added successfully 🎉');
          this.cancel();
        },
        error: () => this.toastr.error('Creation failed ❌')
      });
    }
  }

  // ✅ Edit mode
  edit(balloonId: number) {
     this.router.navigateByUrl("/dashboard/poll-Kisok-Form/"+balloonId)
    this.toastr.info('Editing balloon record ✏️');
  }

  // ✅ Delete
  delete(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          this.loadBalloons();
          this.toastr.warning('Balloon deleted 🗑️');
        },
        error: () => this.toastr.error('Delete failed ❌')
      });
    }
  }

  // ✅ Cancel & reset
  cancel() {
    this.editingId = null;
    this.balloonForm.reset();
  }
}
