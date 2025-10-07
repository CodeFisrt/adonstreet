import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { NgModel } from '@angular/forms';
import { EmpData } from '../emp-data/emp-data';


@Component({
  selector: 'app-employee',
  imports: [CommonModule,NgFor,EmpData],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

  EmpData = [
    { "id": 1, "name": "Rahul", "department": "HR", "salary": 45000 },
    { "id": 2, "name": "Priya", "department": "IT", "salary": 5000 },
    { "id": 3, "name": "Anil", "department": "Finance", "salary": 6000 },
    { "id": 4, "name": "Saniya", "department": "IT", "salary": 650 }
  ];
  evenData: any[] = [];
  ngOnInit() {
    let newData = this.EmpData.filter((val: any) => val?.id % 2 === 0)
    console.log('Filter Data', newData);

    let sortData = this.EmpData.sort((a, b) => a.salary - b.salary);
    console.log('sort Data', sortData);

  }

  sendData(ev: any) {


    this.evenData=[...this.evenData,ev]
    console.log('my even data', this.evenData);

  }
}

