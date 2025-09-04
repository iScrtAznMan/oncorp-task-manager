import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { UpdateTaskListDto } from './dto/update-task-list.dto';
import { TaskList } from './entities/task-list.entity';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from '../task/dto/create-task.dto';

@Injectable()
export class TaskListService {
  //for now use an inMemory store, replace with document store or relation DB
  private readonly tasksLists: Map<number, TaskList> = new Map();

  //TODO: replace with entity id from DBO
  private currId = 0;
  private nextId() {
    let id = this.currId;
    this.currId++;
    return id;
  }

  create(createTaskListDto: CreateTaskListDto) {
    let tasklist:TaskList = new TaskList();
    tasklist.name = createTaskListDto.name;
    tasklist.id = this.nextId();
    tasklist.tasks = [];
    this.tasksLists.set(tasklist.id, tasklist);
    console.log(this.tasksLists);
    return Object.fromEntries(this.tasksLists);
  }

  createTask(id:number, createTaskDto:CreateTaskDto) {
    let task = new Task()
    task.id=this.nextId();
    task.name = createTaskDto.name;
    task.complete = createTaskDto.complete;
    this.tasksLists[id].tasks.push(task);
  }

  findAll() {
    return this.tasksLists;
  }

  findOne(id: number) {
    return this.tasksLists[id];
  }

  findTasks(id:number) {
    return this.findOne(id).tasks;
  }

  update(id: number, updateTaskListDto: UpdateTaskListDto) {
    let taskList =this.tasksLists.get(id);
    taskList.name = updateTaskListDto.name;
    taskList.tasks = updateTaskListDto.tasks;
    this.tasksLists.set(id, taskList)
    return taskList;
  }

  remove(id: number) {
    this.tasksLists.delete(id);
    return this.tasksLists;
  }
}
