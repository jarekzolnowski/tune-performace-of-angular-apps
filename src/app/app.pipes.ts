import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash-decorators';

@Pipe({
  name: 'isStatusValid'
})
export class IsStatusValidPipe implements PipeTransform {
  @memoize()
  transform(status: number): string {
    console.log('is valid');
    return status === 1 ? 'valid' : 'invalid';
  }
}
