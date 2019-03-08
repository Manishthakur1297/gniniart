import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s = new SlicePipe();
    let str = s.transform(value,0,1);
    console.log(str);
    return str;
  }

}
