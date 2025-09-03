import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskListController } from '../task-list/task-list.controller';
import { TaskListService } from '../task-list/task-list.service';

@Module({
  imports: [],
  controllers: [AppController, TaskListController],
  providers: [AppService, TaskListService],
})
export class AppModule {}
