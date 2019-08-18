import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Post, User } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  posts: Post[];
  users: User[];
  time: Date;

  constructor(private appService: AppService,
              private zone: NgZone,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => this.time = new Date(), 1000);
    });
    this.appService.getPosts().subscribe(posts => this.posts = posts);
    this.appService.getUsers().subscribe(users => this.users = users);

    setInterval(() => this.cdr.detectChanges(), 5000);
  }

  addPost(post: Post): void {
    this.posts = [...this.posts, post];
  }

  addUser(user: User): void {
    this.users = [...this.users, user];
  }
}

