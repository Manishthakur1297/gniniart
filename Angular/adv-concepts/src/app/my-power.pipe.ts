import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPower'
})
export class MyPowerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = 1;
    if(args!=undefined)
    {
      for(let i=0;i<args[0];i++)
      {
        res*=value;
      }
    }

    return res;
  }

}
