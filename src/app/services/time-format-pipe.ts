import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  /**
   * Converts the time value into a readable format.
   * Returns hours for longer times and minutes for shorter times.
   */
  transform(timeInMin: number): string {
    if (timeInMin > 60) {
      return (timeInMin / 60).toFixed(1) + ' h';
    }
    return timeInMin + ' min';
  }
}
