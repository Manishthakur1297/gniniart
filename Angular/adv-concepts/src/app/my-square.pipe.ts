import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySquare'
})
export class MySquarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * value;
  }

}
