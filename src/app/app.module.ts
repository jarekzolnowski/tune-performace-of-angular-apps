import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { IsStatusValidPipe } from './app.pipes';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    UserListComponent,
    IsStatusValidPipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
