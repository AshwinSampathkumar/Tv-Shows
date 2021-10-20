import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getDateFormat(data: string) {
    const dateObject = new Date(data).toString();
    const returnData = moment(dateObject).format('DD MMM YYYY').split(' ');
    returnData[0] = returnData[0] + 'th';
    return returnData.join(' ');
  }

  timeConvert(n: number) {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    if (rhours && rminutes) {
      return rhours + 'h ' + rminutes + 'min ';
    } else if (!rhours && !rminutes) {
      return '';
    } else if (!rhours) {
      return rminutes + 'min ';
    } else if (!rminutes) {
      return rhours + 'h';
    }
    return '';
  }
}
