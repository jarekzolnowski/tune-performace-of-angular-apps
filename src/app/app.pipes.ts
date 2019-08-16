import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isStatusValid'
})
export class IsStatusValidPipe implements PipeTransform {
  transform(status: number): string {
    console.log('is valid');
    return status === 1 ? 'valid' : 'invalid';
  }
}
