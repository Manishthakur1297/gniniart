import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name : string = "MJ Thakur";
  dsbl : boolean = true;
  btn : string = "Register";

  constructor() { }

  ngOnInit() {
  }

  getName(): string
  {
    return "Mr. "+this.name;
  }

}
