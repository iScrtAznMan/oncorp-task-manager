import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskListService } from '../task-list/task-list.service';
import { TaskList } from '../task-list/entities/task-list.entity';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private taskListService: TaskListService){}

  updateStats(tlId:number) {
    this.taskListService.updateStats(tlId);
  }

  create(tlId, createTaskDto: CreateTaskDto) {
    return this.taskListService.createTask(tlId, createTaskDto);
  }

  findAll(tlId) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    return taskList;
  }

  findOne(tlId:number, id: number) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    return taskList.tasks[id];
  }

  update(tlId:number, id: number, updateTaskDto: UpdateTaskDto) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    let task:Task = taskList.tasks[id];
    task.name = updateTaskDto.name;
    task.description = updateTaskDto.description;
    if(task.complete != updateTaskDto.complete) {
      taskList.completed.add(id);
      taskList.inprogress.delete(id);
      taskList.todo.delete(id);
    }
    if(task.inprogress != updateTaskDto.inprogress) {
      taskList.todo.delete(id);
      taskList.inprogress.add(id);
    }
    task.complete = updateTaskDto.complete;
    task.inprogress = updateTaskDto.inprogress;
    return `This action updates a #${id} task`;
  }

  remove(tlId:number, id: number) {
    let taskList:TaskList = this.taskListService.getTask(tlId);
    taskList.completed.delete(id);
    taskList.inprogress.delete(id);
    taskList.todo.delete(id);
    return taskList.tasks.delete(id);
  }
}
