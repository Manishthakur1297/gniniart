import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  e_str : string = "";
  p_str : string = "";

  emailID(e1) : string
  {
    if(e1.value.length<1)
    {
        return this.e_str="Email can't be empty....";
    }
    else 
    {
      return this.e_str="*";        
    }
  }

  password(p1) : string
  {
    if(p1.value.length<9)
    {
        return this.p_str="Password must be more than 8 characters";
    }
    else 
    {
      return this.p_str="*";        
    }
  }

}
