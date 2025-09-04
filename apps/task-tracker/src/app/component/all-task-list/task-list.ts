export interface TaskList {
    id:number;
    name:string;
    tasks:Task[]
}

export interface Task{
    id:number;
    name:string;
    complete:boolean;
}