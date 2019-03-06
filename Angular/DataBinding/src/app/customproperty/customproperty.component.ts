import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './customproperty.component.html',
  styleUrls: ['./customproperty.component.css']
})
export class CustompropertyComponent implements OnInit {

  @Input('num')
  x:number=1;
  res:number;

  constructor() 
  {
    //this.res = this.x * this.x;
  }

  ngOnInit() {
  }

  displayResult() : number
  {
    return this.res = this.x * this.x;
  }

}
