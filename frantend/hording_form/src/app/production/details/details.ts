import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store';
import { NewService } from '../../new-service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [Store, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  mydata: [] = []
  filtredData: any
  constructor(private myservice: NewService) { }

  ngOnInit(): void {
    this.myservice.getuserdata().subscribe((res: any) => {
      this.mydata = res;
      console.log(this.mydata);
      let filtredData = this.mydata.filter((usr: any) => usr?.id % 2 === 0);
      console.log(filtredData);
    })
  }
 


}
