import { Route } from '@angular/router';
import { App } from './app';
import { TaskListComponent } from './component/task-list/task-list.component';
import { AllTaskListComponent } from './component/all-task-list/all-task-list-component';

export const appRoutes: Route[] = [
    {
        path:'taskList/:id',
        component:TaskListComponent,
        children: [],
    },
    {
        path:'taskList',
        component:AllTaskListComponent,
    },
    {
        path:'',
        component: App,
    },
];
