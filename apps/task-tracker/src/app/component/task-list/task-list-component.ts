import { Component } from '@angular/core';
import { TaskList } from './task-list';
import { TaskService } from '../../service/task-list.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {
  public taskList: TaskList[] = [];

  formData={
    name:''
  };

  response:any;

  constructor(public taskService: TaskService) {
  }

  submitForm() {
    this.taskService.addTaskList(this.formData).subscribe({
      next:(res)=> {this.taskList = res as TaskList[]}
    })
  }

  ngOnInit(){
    this.taskService.getTaskList().subscribe(data => this.taskList = data);
  }

}

