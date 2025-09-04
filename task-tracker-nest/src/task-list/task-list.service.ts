import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { UpdateTaskListDto } from './dto/update-task-list.dto';
import { TaskListView, TaskList } from './entities/task-list.entity';
import { Task } from '../task/entities/task.entity';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { KeyValuePipe } from '@angular/common';

@Injectable()
export class TaskListService {
  //for now use an inMemory store, replace with document store or relation DB
  private readonly tasksListView: Map<number, TaskListView> = new Map();
  private readonly taskLists: Map<number, TaskList> = new Map();

  //TODO: replace with entity id from DBO
  private currId = 0;
  private nextId() {
    let id = this.currId;
    this.currId++;
    return id;
  }

  getTask(id:number) {
    return this.taskLists[id];
  }

  updateStats(id:number) {
    let tlv:TaskListView = this.tasksListView[id];
    tlv.completed = this.taskLists[id].completed.size;
    tlv.todo = this.taskLists[id].todo;
    tlv.inprogress = this.taskLists[id].inprogress;
  }

  create(createTaskListDto: CreateTaskListDto) {
    let tlv:TaskListView = new TaskListView();
    tlv.name = createTaskListDto.name;
    tlv.id = this.nextId();
    this.tasksListView.set(tlv.id, tlv);
    let taskList = new TaskList();
    taskList.id = tlv.id;
    this.taskLists.set(tlv.id, taskList);
    return tlv;
  }

  createTask(id:number, createTaskDto:CreateTaskDto) {
    let task = new Task()
    task.id=this.nextId();
    task.name = createTaskDto.name;
    task.complete = createTaskDto.complete;
    this.taskLists[id].tasks.push(task);
    this.taskLists[id].todo.push(task.id);
  }

  findAll() {
    return Array.from(this.tasksListView.values());
  }

  findOne(id: number) {
    return this.tasksListView[id];
  }

  findTasks(id:number) {
    return this.taskLists[id].tasks;
  }

  update(id: number, updateTaskListDto: UpdateTaskListDto) {
    let tlv =this.tasksListView.get(id);
    tlv.name = updateTaskListDto.name;
    tlv.priority = updateTaskListDto.priority
    this.tasksListView.set(id, tlv)
    return tlv;
  }

  remove(id: number) {
    if(this.tasksListView[id]) {
      this.tasksListView.delete(id);
      this.taskLists.delete(id);
      return true;
    }
    return false;
  }
}
