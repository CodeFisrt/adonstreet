import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Hoarding } from '../../Model/model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-hoardings',
  imports: [NgFor, CommonModule,RouterLink],
  templateUrl: './hoardings.html',
  styleUrl: './hoardings.css'
})
export class Hoardings {
  hoardingList: Hoarding[] = [];
  constructor(
  private http: HttpClient,
  public router: Router,  // <-- changed from private to public
  private toaster: ToastrService
) { }

  ngOnInit() {
    this.getAllHoardings();
  }


  getAllHoardings() {
    this.http.get<Hoarding[]>("http://localhost:8080/hoardings").subscribe((res: any) => {
      this.hoardingList = res;
    })
  }

  edit(id: number) {
    this.router.navigateByUrl("/dashboard/hoarding-form/" + id)
    this.toaster.info('Editing hoardings record ✏️');

  };

  deleteHoardings(id: number) {
  const isDelete = window.confirm("Are you sure you want to delete this hoarding?");
  if (isDelete) {
    this.http.delete("http://localhost:8080/hoardings/" + id, { responseType: 'text' }).subscribe({
      next: () => {
        this.toaster.success("Hoarding deleted successfully ✅");
        this.getAllHoardings(); // refresh list
      },
      error: (err) => {
        console.error(err);
        this.toaster.error("❌ Failed to delete hoarding");
      }
    });
  }
}


}
