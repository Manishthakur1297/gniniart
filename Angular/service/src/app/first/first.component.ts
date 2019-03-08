import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { DbService } from '../db.service';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  //ls : LogService;
  constructor(private ls : LogService) 
  {
    //this.ls = new LogService();
  }

  ngOnInit() {
  }

  xyz(msg) : void
  {
    this.ls.logMessage(msg);
    // this.db.logDB(msg);
  }

}
