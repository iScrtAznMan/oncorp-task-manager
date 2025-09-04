import { Task } from "./task";

export interface TaskListDto {
  id:number;
  tasks:Task[];
  complete:number[];
  todo:number[];
  inprogress:number[];
}
