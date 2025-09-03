import { Injectable } from '@nestjs/common';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { UpdateTaskListDto } from './dto/update-task-list.dto';
import { TaskList } from './entities/task-list.entity';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskListService {

  private readonly tasksLists: TaskList[] = [];

  create(createTaskListDto: CreateTaskListDto) {
    let tasklist:TaskList = new TaskList();
    tasklist.name = createTaskListDto.name;
    tasklist.tasks = [];
    this.tasksLists.push(tasklist);
    return this.tasksLists;
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
    return `This action updates a #${id} taskList`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskList`;
  }
}
