import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s = new SlicePipe();
    let str = s.transform(value,1,3);
    console.log(str);
    return str;
  }

}
