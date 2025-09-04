import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskListService } from '../task-list/task-list.service';
import { TaskList } from '../task-list/entities/task-list.entity';
import { Task } from './entities/task.entity';
import { TaskListDto } from './dto/tasklist.dto';

@Injectable()
export class TaskService {
  constructor(private taskListService: TaskListService){}

  toCdo(tl:TaskList) {
      let dto = new TaskListDto(tl);
      console.log(dto);
      return dto;
  }

  updateStats(tlId:number) {
    this.taskListService.updateStats(tlId);
  }

  create(tlId, createTaskDto: CreateTaskDto) {
    return this.taskListService.createTask(tlId, createTaskDto);
  }

  findAll(tlId) {
    console.log(this.taskListService);
    let taskList:TaskList = this.taskListService.getTask(tlId);
    return taskList;
  }

  findOne(tlId:number, id: number) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    return taskList.tasks.get(id);
  }

  update(tlId:number, id: number, updateTaskDto: UpdateTaskDto) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    let task:Task = taskList.tasks[id];
    task.name = updateTaskDto.name;
    task.description = updateTaskDto.description;
    if(task.complete != updateTaskDto.complete) {
      taskList.complete.add(id);
      taskList.inprogress.delete(id);
      taskList.todo.delete(id);
    }
    if(task.inprogress != updateTaskDto.inprogress) {
      taskList.todo.delete(id);
      taskList.inprogress.add(id);
    }
    task.complete = updateTaskDto.complete;
    task.inprogress = updateTaskDto.inprogress;
    return task;
  }

  remove(tlId:number, id: number) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    taskList.complete.delete(id);
    taskList.inprogress.delete(id);
    taskList.todo.delete(id);
    return taskList.tasks.delete(id);
  }
}
