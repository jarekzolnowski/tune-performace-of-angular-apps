import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Post, User } from '../../app.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: 'posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements AfterViewInit {
  @Input() set posts(value: Post[]) {
    console.log('Post List component changed! ');
    this.newPots = value;
    this.cdr.detectChanges();
  }
  @Input() users: User[];
  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();
  newPots: Post[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  onAdd(): void {
    this.add.emit({userId: 100, id: 1001, title: 'New Post', body: 'This is nearly created Post body', status: 1});
  }
}
