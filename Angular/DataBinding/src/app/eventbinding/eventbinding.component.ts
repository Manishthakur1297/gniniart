import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  i: number = 0 ;

  constructor() { }

  ngOnInit() {
  }

  abc() : void
  {
    this.i++;
    console.log("abc method called "+this.i);
  }

}
