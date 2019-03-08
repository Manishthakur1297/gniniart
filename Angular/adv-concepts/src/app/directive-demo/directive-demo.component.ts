import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directiveDemo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  disp : boolean = true;
  fruits = ['Mango', 'Apple', 'Orange', 'Grapes'];
  option : number = 1;
  op : number = 0;


  constructor() { }

  ngOnInit() {
  }

  abc():void
  {
    this.disp = !this.disp;
  }

  incr() : void
  {
    if(this.option==5)
    {
      this.option = 0;
    }
    this.option++;
  }

  display(op) : void
  {
    console.log(op);
    this.op = op;
  }

}
