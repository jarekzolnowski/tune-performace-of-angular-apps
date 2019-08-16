import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../app.model';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})

export class UserListComponent {
  @Input() users: User[];
  @Output() add: EventEmitter<User> = new EventEmitter<User>();

  onAdd(name: string): void {
    this.add.emit({name});
  }
}
