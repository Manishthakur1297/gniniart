import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'branch'
})
export class BranchPipe extends SlicePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var s = new SlicePipe();
    let str = s.transform(value, args);
    console.log(str);
    return str;
  }

}
