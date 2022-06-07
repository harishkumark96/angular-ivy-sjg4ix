import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: any, unit: any, an: any): any {
    if (unit == 'c') {
      let celciusTemperature = (value - 32) / 1.8;
      return celciusTemperature;
    } else {
      let farhenHeit = value * 1.8 + 32;
      return farhenHeit;
    }
  }
}
