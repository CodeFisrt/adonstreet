import { Component, Input, OnInit } from '@angular/core';
import { Details } from '../details/details';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.css'
})
export class Store implements OnInit {
@Input() evenIduser:[]=[]
ngOnInit(): void {
  console.log('my even data', this.evenIduser);
  
}
}
