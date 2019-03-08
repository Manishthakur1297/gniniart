import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { DbService } from '../db.service';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private db : DbService) 
  {
    //this.ls = new LogService();
  }

  ngOnInit() {
  }

  abc(msg) : void
  {
    this.db.logDB(msg);
  }

}