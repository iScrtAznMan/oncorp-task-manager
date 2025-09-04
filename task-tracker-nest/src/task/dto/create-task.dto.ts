export class CreateTaskDto {
    name:string;
    description:string;
    complete:boolean;
    inprogress:boolean;
    creationTime:Date;
    startTime:Date;
    completionTime:Date;
}
