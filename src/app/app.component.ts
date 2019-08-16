import { Component, OnInit } from '@angular/core';
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

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    setInterval(() => this.time = new Date(), 1000);
    this.appService.getPosts().subscribe(posts => this.posts = posts);
    this.appService.getUsers().subscribe(users => this.users = users);
  }

  addPost(post: Post): void {
    this.posts = [...this.posts, post];
  }

  addUser(user: User): void {
    this.users = [...this.users, user];
  }
}

