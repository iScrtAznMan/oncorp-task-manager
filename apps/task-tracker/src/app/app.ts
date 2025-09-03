import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list-component';

@Component({
  imports: [TaskListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'task-tracker';
}
