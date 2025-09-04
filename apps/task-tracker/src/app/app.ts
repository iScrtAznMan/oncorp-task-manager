import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllTaskListComponent } from './component/all-task-list/all-task-list-component';

@Component({
  imports: [AllTaskListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'task-tracker';
}
