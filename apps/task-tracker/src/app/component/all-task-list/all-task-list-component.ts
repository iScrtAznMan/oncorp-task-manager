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
  styleUrl: './all-task-list-component.css',
})
export class AllTaskListComponent {
  public taskList: TaskList[] = [];

  formData={
    name:''
  };

  response:any;

  constructor(public taskService: TaskService) {
  }

  submitForm() {
    this.taskService.addTaskList(this.formData)
    .pipe(switchMap(()=>this.taskService.getAllTaskList()))
    .subscribe(data => this.taskList = data);
  }

  ngOnInit(){
    this.taskService.getAllTaskList().subscribe(data => this.taskList = data as TaskList[]);
  }

}

