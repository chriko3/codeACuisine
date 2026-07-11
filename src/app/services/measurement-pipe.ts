import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurementPipe',
})
export class MeasurementPipe implements PipeTransform {
  /**
   * Converts the ingredient type to its display unit.
   * Returns the correct unit based on the given type.
   */
  transform(type: string): string {
    if (type == 'gram') {
      return 'g';
    } else if (type == 'piece') {
      return '';
    } else {
      return 'ml';
    }
  }
}
