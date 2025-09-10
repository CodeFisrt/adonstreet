import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Screen } from '../../Model/model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-screen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './digital-screen.html',
  styleUrls: ['./digital-screen.css']
})
export class DigitalScreen implements OnInit {
  screenList: Screen[] = [];
  screenForm!: FormGroup;
  selectedScreenId: number = 0; // 0 = new screen, otherwise edit

  constructor(
    private router: Router,
    private http: HttpClient,
    private toaster: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllScreen();
  }

  // Initialize the form
  initForm() {
    this.screenForm = this.fb.group({
      ScreenName: ['', Validators.required],
      Location: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Latitude: [null, Validators.required],
      Longitude: [null, Validators.required],
      ScreenType: ['', Validators.required],
      Size: ['', Validators.required],
      Resolution: ['', Validators.required],
      OwnerName: ['', Validators.required],
      ContactPerson: ['', Validators.required],
      ContactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      OnboardingDate: ['', Validators.required],
      Status: ['Active', Validators.required],
      RentalCost: [0, Validators.required],
      ContractStartDate: ['', Validators.required],
      ContractEndDate: ['', Validators.required],
      PowerBackup: [false],
      InternetConnectivity: ['', Validators.required],
      Notes: ['']
    });
  }

  // Load all screens
  getAllScreen() {
    this.http.get<Screen[]>("http://localhost:8080/screens").subscribe({
      next: (res) => {
        this.screenList = res;
        this.toaster.success("Screens Loaded Successfully");
      },
      error: (err) => {
        console.error(err);
        this.toaster.error("Failed to load screens");
      }
    });
  }

  // Save new screen or update existing
  addOrUpdateScreen() {
    const payload = this.screenForm.value;

    if (this.selectedScreenId === 0) {
      // Create new screen
      this.http.post("http://localhost:8080/screens/", payload).subscribe({
        next: (res: any) => {
          this.toaster.success("New Screen Added Successfully");
          this.getAllScreen();
          this.screenForm.reset();
        },
        error: (err) => {
          console.error(err);
          this.toaster.error("Error Creating Screen");
        }
      });
    } else {
      // Update existing screen
      this.http.put(`http://localhost:8080/screens/${this.selectedScreenId}`, payload).subscribe({
        next: (res: any) => {
          this.toaster.success("Screen Updated Successfully");
          this.getAllScreen();
          this.screenForm.reset();
          this.selectedScreenId = 0; // reset to create mode
        },
        error: (err) => {
          console.error(err);
          this.toaster.error("Error Updating Screen");
        }
      });
    }
  }

  // Delete a screen
  deleteScreen(id: number) {
    const isDelete = window.confirm("Are you sure you want to delete this screen?");
    if (!isDelete) return;

    this.http.delete(`http://localhost:8080/screens/${id}`).subscribe({
      next: () => {
        this.toaster.success("Screen Deleted Successfully");
        this.getAllScreen();
      },
      error: (err) => {
        console.error(err);
        this.toaster.error("Failed to delete screen");
      }
    });
  }

  // Load screen data into form for editing
  editScreen(screenId: number) {
   this.router.navigateByUrl("/dashboard/screen-Form/"+screenId)
    this.toaster.info("Edit screen data loaded into form");
  }

  // Reset form
  resetForm() {
    this.screenForm.reset();
    this.selectedScreenId = 0;
  }
}
