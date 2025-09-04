import { Task } from '../../task/entities/task.entity';

// top level datastructer, if a DB, the main entity table
export class TaskListView {
    id:number;
    name:string;
    priority:number=0;
    creationTime:Date;
    updateTime:Date;
    completed:number;
    todo:number;
    inprogress:number;
}

// child datastructure separate from view to improve performance. if in a DB, would be the separate join table (replace Sets with status columns).
export class TaskList {
    id:number;

    tasks:Map<number, Task> = new Map();
    complete:Set<number> = new Set();
    todo:Set<number> = new Set();
    inprogress:Set<number> = new Set();
}
