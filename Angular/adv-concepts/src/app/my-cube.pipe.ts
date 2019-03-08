import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCube'
})
export class MyCubePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value*value*value;
  }

}
