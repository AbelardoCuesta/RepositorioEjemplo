import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform  {
  transform(value: any) {
    return value <=9 ? '0'+value : value;
  }
}

