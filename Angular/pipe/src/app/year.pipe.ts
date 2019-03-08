import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s = new SlicePipe();
    let str = s.transform(value,3,5);
    console.log(str);
    return str;
  }

}
