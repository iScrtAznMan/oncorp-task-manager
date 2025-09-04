export class Task {
    id:number;
    priority:number=0;
    name:string;
    description:string;
    complete:boolean=false;
    inprogress:boolean=false;
    creationTime:Date;
    startTime:Date;
    completionTime:Date;
}
