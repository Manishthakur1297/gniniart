import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pow',
  templateUrl: './mypowerfunction.component.html',
  styleUrls: ['./mypowerfunction.component.css']
})
export class MypowerfunctionComponent implements OnInit {

  @Input('num')
  x:number = 1;

  @Input('times')
  y:number = 1;

  constructor() { }

  ngOnInit() {
  }

  displayPower():number
  {
    let res =this.x;
    for(let i=1;i<this.y;i++)
    {
      res*=this.x;
    }

    return res;
  }

}
