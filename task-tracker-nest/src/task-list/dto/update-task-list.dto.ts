import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskListDto } from './create-task-list.dto';
import { Task } from '../entities/task.entity';

export class UpdateTaskListDto extends PartialType(CreateTaskListDto) {
    tasks:Task[];
}
