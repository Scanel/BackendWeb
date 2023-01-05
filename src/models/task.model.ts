export class Task{
    idtask:number;
    idroom: string;
    titulo: string;
    descripcion: string;
    r1:string;
    r2:string;
    r3:string;
    r4:string;

    constructor(idtask: number, idroom: string, titulo: string, descripcion: string,  r1:string, r2: string, r3: string, r4: string){
        this.idtask = idtask;
        this.idroom = idroom;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.r4 = r4;
    }
}