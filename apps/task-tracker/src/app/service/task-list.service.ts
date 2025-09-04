import { Injectable, inject } from '@angular/core';
import { TaskList } from '../component/all-task-list/task-list';
import { HttpClient } from '@angular/common/http';
import { Task } from '../component/task-list/task';

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
        return this.http.get<TaskList[]>(api);
    }

    public getTaskList(id:string) {
        let api = this.urlLists+"/"+id;
        return this.http.get<TaskList>(api);
    }

    public getTasks(id:string) {
      let api = this.urlLists+"/"+id+"/tasks";
      return this.http.get<any>(api);
    }

    public addTask(id:string, body:any) {
        return this.http.post(this.urlLists+'/'+id+'/tasks',body);
    }

    public getTask(id:string, tid:string) {
      return this.http.get<any>(this.urlLists+"/"+id+"/tasks/"+tid);
    }

    public updateTask(id:string, tid:string, body:any) {
      return this.http.patch(this.urlLists+"/"+id+"/tasks/"+tid, body);
    }

    public deleteTask(id:string, tid:string) {
      return this.http.delete(this.urlLists+"/"+id+"/tasks/"+tid);
    }


}
