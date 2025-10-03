import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store';
import { NewService } from '../../new-service';

@Component({
  selector: 'app-details',
  imports: [Store],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit{
mydata:[]=[]
constructor(private myservice:NewService){}  
 
ngOnInit(): void {
  this.myservice.getuserdata().subscribe((res:any)=>{
this.mydata = res
console.log(this.mydata);

  })

}

}
