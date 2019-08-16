import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './app.model';

@Pipe({
  name: 'shouldExpand'
})
export class ShouldExpandPipe implements PipeTransform {
  transform(post: Post, prop: string, maxCharNumber): any {
    console.log('should expand');
    return post[prop].length > maxCharNumber;
  }
}
