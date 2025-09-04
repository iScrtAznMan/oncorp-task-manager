import { Injectable, inject } from '@angular/core';
import { TaskList } from '../component/all-task-list/task-list';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class TaskService{
    taskList: TaskList[] = [];
    private http = inject(HttpClient);
    private readonly url = 'http://localhost:3000/api/v1';
    private readonly urlLists = this.url+'/lists';
    

    constructor(public httpClient:HttpClient){
    }

    public addTaskList(body:any) {
        return this.http.post(this.urlLists, body);
    }

    public getAllTaskList() {
        let api = this.urlLists;
        return this.http.get<Map<number,TaskList>>(api);
    }

    public getTaskList(id:string) {
        let api = this.urlLists+id;
        return this.http.get<TaskList>(api);
    }

    public addTask(id:string, body:any) {
        return this.http.post(this.urlLists+'/'+id,body);
    }


}
