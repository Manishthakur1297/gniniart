// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LogService {

  constructor() 
  {
    console.log("Log 0 Constructor invoked !!!");
  }

  logMessage(msg) : void
  {
    console.log("Log 0 Service : "+msg);
  }

}
