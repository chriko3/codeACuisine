import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementPipe',
})
export class MeasurementPipe implements PipeTransform {
  transform(type: string): string {
    if (type == 'gram') {
      return 'g';
    } else if (type == 'piece') {
      return '';
    }
    else{
      return 'ml';
    }
  }
}
