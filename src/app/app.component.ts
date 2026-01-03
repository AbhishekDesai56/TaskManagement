import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

interface User {
  id: string;
  avatar: string;
  name: string;  
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'TaskManagement';
  public selectedUserId: string = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
