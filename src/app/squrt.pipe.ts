import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squrt',
})
export class SqurtPipe implements PipeTransform {
  transform(value: any): any {
    return Math.floor(value);
  }
}
