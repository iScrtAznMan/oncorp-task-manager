import { Injectable, inject } from "@angular/core";
import { TaskList } from "../component/all-task-list/task-list";
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

    public getAllTaskList() {
        let api = this.url+'/task-list';
        return this.http.get<Map<number,TaskList>>(api);
    }

    public getTaskList(id:string) {
        let api = this.url+'/task-list/'+id;
        return this.http.get<TaskList>(api);
    }

    public addTask(id:string, body:any) {
        return this.http.post(this.url+'/task-list/'+id+'/',body);
    }


}
