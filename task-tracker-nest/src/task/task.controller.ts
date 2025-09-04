import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('lists/:tlId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Param('tlId') tlId, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(+tlId, createTaskDto);
  }

  @Get()
  findAll(@Param('tlId')tlId)  {
    return this.taskService.findAll(+tlId);
  }

  @Get(':id')
  findOne(@Param('tlId') tlId, @Param('id') id: string) {
    return this.taskService.findOne(+tlId, +id);
  }

  @Patch(':id')
  update(@Param('tlId') tlId, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+tlId,+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('tlId') tlId, @Param('id') id: string) {
    return this.taskService.remove(+tlId,+id);
  }
}
