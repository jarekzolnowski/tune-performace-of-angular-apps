import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shouldExpand'
})
export class ShouldExpandPipe implements PipeTransform {
  transform(value: string, maxCharNumber): any {
    console.log('should expand');
    return value.length > maxCharNumber;
  }
}
