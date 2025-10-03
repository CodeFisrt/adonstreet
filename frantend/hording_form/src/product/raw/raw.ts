import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.html',
  styleUrls: ['./raw.css']
})
export class Raw implements OnInit {

  @Input() evdata: any[] = [];
  @Output() name = new EventEmitter<any>();

  ngOnInit() {
    console.log("child even_Data", this.evdata);

    let mname = this.evdata.filter((user: any) =>
      user?.name?.toLowerCase().startsWith('m')  
    );
    this.name.emit(mname);
  }
}

