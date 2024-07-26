import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'dateFormatter',
  standalone: true
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {

    let date = moment(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
    return date;
  }


}
