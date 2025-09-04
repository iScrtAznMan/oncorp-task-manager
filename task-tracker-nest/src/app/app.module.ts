import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskListModule } from '../task-list/task-list.module';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskListModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
