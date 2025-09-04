import { TaskList } from "task-tracker-nest/src/task-list/entities/task-list.entity";
import { Task } from "../entities/task.entity";

export class TaskListDto {
    constructor(tl: TaskList) {
        if(tl) {
            this.id = tl.id;
            this.tasks = Array.from(tl.tasks.values());
            this.complete = [...tl.complete];
            this.todo = [...tl.todo];
            this.inprogress=[...tl.inprogress];
        }

    }

    id:number;
    tasks:Task[];
    complete:number[];
    todo:number[];
    inprogress:number[];
}