export interface TaskList {
    name:string;
    tasks:Task[]
}

export interface Task{
    name:string;
    complete:boolean;
}