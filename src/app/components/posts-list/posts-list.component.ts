import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Post, User } from '../../app.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: 'posts-list.component.html'
})

export class PostsListComponent implements OnChanges {
  @Input() posts: Post[];
  @Input() users: User[];
  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Post List component changed! ');
    console.log(changes);
  }

  onAdd(): void {
    this.add.emit({userId: 100, id: 1001, title: 'New Post', body: 'This is nearly created Post body'});
  }

  shouldExpand({body}): boolean {
    console.log('should expand');
    return body.length > 170;
  }

  expand(): void {
    console.log('expand');
  }
}
