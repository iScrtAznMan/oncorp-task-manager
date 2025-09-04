import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { TaskList } from './task-list';
import { TaskService } from '../../service/task-list.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-task-list',
  imports: [FormsModule, RouterLink, KeyValuePipe],
  templateUrl: './all-task-list-component.html',
  styleUrl: './all-task-list-component.css',
})
export class AllTaskListComponent {
  public taskList: Map<number,TaskList> = new Map();

  formData={
    name:''
  };

  response:any;

  constructor(public taskService: TaskService) {
  }

  submitForm() {
    this.taskService.addTaskList(this.formData).subscribe({
      next:(res)=> {this.taskList = res as Map<number,TaskList>}
    })
  }

  ngOnInit(){
    this.taskService.getAllTaskList().subscribe(data => this.taskList = data);
  }

}

