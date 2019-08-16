import { Pipe, PipeTransform } from '@angular/core';

type Value<T> = {
  [K in keyof T]: string;
};

@Pipe({
  name: 'shouldExpand'
})
export class ShouldExpandPipe<T, K extends keyof T> implements PipeTransform {
  transform(value: Value<T>, prop: K, maxCharNumber: number): boolean {
    console.log('should expand');
    return value[prop].length > maxCharNumber;
  }
}
