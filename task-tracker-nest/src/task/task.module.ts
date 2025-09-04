import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskListService } from '../task-list/task-list.service';
import { TaskListModule } from '../task-list/task-list.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [TaskListModule],
})
export class TaskModule {}
