import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'roll'
})
export class RollPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s = new SlicePipe();
    let str = s.transform(value,7);
    console.log(str);
    return str;
  }

}
