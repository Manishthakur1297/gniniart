import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homeloan',
  templateUrl: './homeloan.component.html',
  styleUrls: ['./homeloan.component.css']
})
export class HomeloanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  p:string ="";
  r:string = "";
  t:string = "";
  i:string = "";

  pp:number;
  rr:number;
  tt:number;

  principal(p1:number): string
  {
    //console.log(p1);
    //console.log(p1.toString().length);
    if(p1<=0 || p1.toString().length==0)
    {
        return this.p = "Principal can't be 0 or negative value";        
    }
    else 
    {
        this.pp = p1;
        return this.p = "*";        
    }
}

Rate(r1:number)
{
    if(r1<=0 || r1.toString().length==0)
    {
        
      this.r = "Rate can't be 0 or negative value";
    }  
    else
    {   
        if(r1>100)
        {
          this.r = "Rate must be within 100%...";  
        } 
        else 
        {
          this.rr = r1;
          this.r = "*";        
        }
    }
}

Time(t1:number)
{
  if(t1<=0 || t1.toString().length==0)
  {
      
    this.t = "Time can't be 0 or negative value";
  }  
  else
  {   
      if(t1>100)
      {
        this.t = "Time must be within 100 years interval";  
      } 
      else 
      {
        this.tt = t1;
        this.t = "*";        
      }
  }
}



Interest()
{
  if(this.p.length==1 && this.r.length==1 && this.t.length==1 )
  {
    let interest = (this.pp*this.rr*this.tt)/100;
    this.i = interest.toString();
  }
  else
  {
    this.i = "Please Fill all details first...."
  }
}

}
