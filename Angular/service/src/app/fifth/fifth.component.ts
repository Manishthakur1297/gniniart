import { Component, OnInit } from '@angular/core';
import { Db1Service } from '../db1.service';

@Component({
  selector: 'fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  constructor(private db1 : Db1Service) { }

  ngOnInit() {
  }

  asd(msg):void
  {
    this.db1.DB(msg);
  }

}
