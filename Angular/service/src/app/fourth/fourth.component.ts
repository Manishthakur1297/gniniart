import { Component, OnInit } from '@angular/core';
import { Log1Service } from '../log1.service';

@Component({
  selector: 'fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor(private ls : Log1Service) { }

  ngOnInit() {
  }

  qwe(msg) : void
  {
    this.ls.log1Service(msg);
  }

}
