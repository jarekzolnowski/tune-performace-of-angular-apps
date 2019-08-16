import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post, User } from '../../app.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: 'posts-list.component.html'
})

export class PostsListComponent {
  @Input() set posts(value: Post[]) {
    console.log('Post List component changed! ');
    this.newPots = value;
  }
  @Input() users: User[];
  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();
  newPots: Post[];

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
