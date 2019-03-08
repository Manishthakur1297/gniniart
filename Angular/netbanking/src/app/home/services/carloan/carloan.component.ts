import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carloan',
  templateUrl: './carloan.component.html',
  styleUrls: ['./carloan.component.css']
})
export class CarloanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emi : number;
  li : number = 10;

  getEmi(p,t,r):void
  {
    this.emi = p*r*t/100;
  }

  abc(t1)
  {
    this.li =t1;
  }

}
