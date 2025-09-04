import { Route } from '@angular/router';
import { App } from './app';
import { TaskListComponent } from './component/task-list/task-list.component';
import { AllTaskListComponent } from './component/all-task-list/all-task-list-component';
import { TaskComponent } from './component/task/task.component';

export const appRoutes: Route[] = [
  {
    path: 'lists/:id/tasks/:tid',
    component: TaskComponent,
  },
  {
    path: 'lists/:id',
    component: TaskListComponent,
  },
  {
    path: 'lists',
    component: AllTaskListComponent,
  },
  {
    path: '',
    component: AllTaskListComponent,
  },
];
