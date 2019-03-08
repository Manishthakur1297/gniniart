import { Injectable } from '@angular/core';
import { Log1Service } from './log1.service';
import { DbService } from './db.service';

@Injectable()
export class Db1Service {

  constructor(private ls : Log1Service)
  {
    console.log("Database 1 Service Instantiated....");
  }

  DB(msg) : void
  {
    this.ls.log1Service(msg);
    
    console.log("DB1 service : "+msg);
  }

}
