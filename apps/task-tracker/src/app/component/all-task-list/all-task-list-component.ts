import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { TaskList } from './task-list';
import { TaskService } from '../../service/task-list.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-all-task-list',
  imports: [FormsModule, RouterLink, KeyValuePipe],
  templateUrl: './all-task-list-component.html',
  styleUrl: './all-task-list-component.scss',
})
export class AllTaskListComponent {
  public taskList: TaskList[] = [];

  formData={
    name:''
  };

  constructor(public taskService: TaskService) {
  }

  ngOnInit(){
    this.taskService.getAllTaskList().subscribe(data => this.taskList = data as TaskList[]);
  }

  submitForm() {
    this.taskService.addTaskList(this.formData)
    .pipe(switchMap(()=>this.taskService.getAllTaskList()))
    .subscribe(data => this.taskList = data);
  }

  deleteList(id:number) {
    this.taskService.deleteTaskList(""+id).pipe(switchMap(
      ()=>this.taskService.getAllTaskList()
    )).subscribe(data => this.taskList=data);
  }

}

