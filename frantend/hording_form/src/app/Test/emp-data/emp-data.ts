import { NgFor } from '@angular/common';
import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-emp-data',
  imports: [NgFor],
  templateUrl: './emp-data.html',
  styleUrl: './emp-data.css'
})
export class EmpData implements OnInit {
@Input() evendata: any;
ngOnInit(): void {
  console.log("input data",this.evendata);
  
}
}
