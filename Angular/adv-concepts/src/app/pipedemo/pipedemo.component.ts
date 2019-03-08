import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  str : string = "Hello Everybody";
  d1 : Date = new Date();
  amount:number = 132345432;
  emp = {'Name' : 'Manish', 'Age':21, 'Designation' : 'Programmer'}


  constructor() { }

  ngOnInit() {
  }

}
