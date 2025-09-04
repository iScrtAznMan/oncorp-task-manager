import { Task } from "./task.entity";

export class TaskList {
    id:number;
    name:string;
    tasks:Task[] = [];
}
