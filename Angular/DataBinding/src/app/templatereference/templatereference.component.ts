import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent implements OnInit {

  fullname : string = "";
  str : string = "Just for Demo";
  constructor() { }

  ngOnInit() {
  }

  setFullName(fname, lname):void
  {
    this.fullname = fname + " "+lname;
  }

  display():void
  {
    console.log(this.str);
  }
}
