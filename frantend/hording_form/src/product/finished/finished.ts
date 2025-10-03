import { Component } from '@angular/core';
import { Raw } from '../raw/raw';
import { MyService } from '../../app/my-service';

@Component({
  selector: 'app-finished',
  imports: [Raw],
  templateUrl: './finished.html',
  styleUrl: './finished.css'
})
export class Finished {
  newdata: [] = [];
  evenData:any;
  constructor(private comanservice: MyService) { }
  ngOnInit() {
    
    this.comanservice.getdata().subscribe((res: any) => {
      this.newdata = res
      console.log("api_Data",this.newdata);
      this.evenData = this.newdata.filter((val: any) => val?.id % 2 === 0)
      

    })
  
  }
  name(event:any){
  
    console.log("chiled to parent data",event);
    
    
  }
}

