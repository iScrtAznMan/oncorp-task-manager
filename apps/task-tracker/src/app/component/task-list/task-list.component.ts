import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task-list.service';
import { TaskList } from '../all-task-list/task-list';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'app-task-list',
    imports:[FormsModule],
    templateUrl: './task-list-component.html',
    styleUrl: './task-list-component.css',
})
export class TaskListComponent {
    readonly taskId:string;
    private route = inject(ActivatedRoute);
    taskList?:TaskList;

    formData={
        name:'',
        complete:false,
    };

    constructor(public taskService:TaskService) {
        this.taskId = this.route.snapshot.paramMap.get('id') ?? '-1';
    }

    ngOnInit() {
        this.taskService.getTaskList(this.taskId).subscribe(data => this.taskList = data);
    }

    public getTask(id:string) {

    }

    public submitForm(){
        this.taskService.addTask(this.taskId, this.formData).subscribe({
          next:(res) => {
            
          }
        });
    }

    public updateTask(){
        return;
    }

    public removeTask(){
        return;
    }


}
