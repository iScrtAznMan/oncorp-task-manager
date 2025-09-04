import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task-list.service';
import { TaskList } from '../all-task-list/task-list';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Task } from './task';
import { switchMap } from 'rxjs';
import { TaskListDto } from './task-list-dto';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-task-list',
    imports:[FormsModule, RouterLink],
    templateUrl: './task-list-component.html',
    styleUrl: './task-list-component.css',
})
export class TaskListComponent {
    readonly taskId:string;
    private route = inject(ActivatedRoute);
    taskList?:TaskList;
    tasks?:TaskListDto;

    formData={
        name:'',
        description:'',
        complete:false,
    };

    constructor(public taskService:TaskService) {
        this.taskId = this.route.snapshot.paramMap.get('id') ?? '-1';
    }

    ngOnInit() {
        this.taskService.getTaskList(this.taskId).subscribe(data => this.taskList = data);
        this.taskService.getTasks(this.taskId).subscribe(data => this.tasks = data);
    }

    public getTasks(id:string) {
      this.taskService.getTasks(this.taskId).subscribe(data => this.tasks = data);
    }

    public submitForm(){
        this.taskService.addTask(this.taskId, this.formData)
        .pipe(switchMap(()=>this.taskService.getTasks(this.taskId)))
        .subscribe({
          next:(res) => {
            this.tasks = res;
          }
        });
    }

    public updateTask(id:string){
        return;
    }

    public removeTask(id:string){
        return;
    }


}
