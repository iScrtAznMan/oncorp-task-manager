import { Injectable, inject } from "@angular/core";
import { TaskList } from "../component/task-list/task-list";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class TaskService{
    taskList: TaskList[] = [];
    private http = inject(HttpClient);
    private readonly url = "http://localhost:3000/api";

    constructor(public httpClient:HttpClient){

    }

    public addTaskList(body:any) {
        return this.http.post(this.url+'/task-list', body);
    }

    public getTaskList() {
        return this.http.get<TaskList[]>(this.url+'/task-list');
    }


}