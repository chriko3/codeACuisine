import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(timeInMin: number): string {
    if (timeInMin > 60) {
      return (timeInMin / 60).toFixed(1) + ' hours';
    }
    return timeInMin + ' minutes';
  }
}
