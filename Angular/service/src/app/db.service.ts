import { LogService } from './log.service';
import { Injectable } from '@angular/core'; 

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DbService {

  constructor(private ls : LogService) 
  {
    console.log("DB 0 Service Instantiated....");
  }

  logDB(msg) : void
  {
    this.ls.logMessage(msg);
    console.log("Database 0 Service : "+msg);
    
  }

}
