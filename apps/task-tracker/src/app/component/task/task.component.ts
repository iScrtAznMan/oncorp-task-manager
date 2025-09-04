import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../task-list/task";
import { TaskService } from '../../service/task-list.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component
({
  selector: 'app-task',
  imports:[FormsModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.scss',
})
export class TaskComponent{
  task?:Task;
  taskListId;
  taskId;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(public taskService:TaskService) {
    this.taskListId = this.route.snapshot.paramMap.get('id') ?? '-1';
    this.taskId = this.route.snapshot.paramMap.get('tid') ?? '-1';
  }

  ngOnInit() {
    this.taskService.getTask(this.taskListId, this.taskId).subscribe(data => this.task=data as Task);
  }

  public onCompleteChange(event:Event) {
    if(this.task) {
      this.task.complete = !this.task.complete;
      this.taskService.updateTask(this.taskListId, this.taskId, this.task).subscribe();
    }
  }

  public deleteTask(event: MouseEvent) {
    if(this.task) {
      this.taskService.deleteTask(this.taskListId, this.taskId).subscribe(data =>
        this.router.navigate(['lists',this.taskListId]));
    }
  }
}
