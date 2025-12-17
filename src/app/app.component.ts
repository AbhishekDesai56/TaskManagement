import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from "@angular/common";

interface User {
  id: string;
  avatar: string;
  name: string;  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
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
