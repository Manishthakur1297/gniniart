import { DbService } from './db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Log1Service {

  constructor(private dbb : DbService) 
  { 
    console.log("Log 1 Service invoked...");
  }
  
  log1Service(msg):void
  {
    console.log("Log 1 Service : " + msg);
    this.dbb.logDB(msg);
  }

}
