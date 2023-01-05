export class Room{
    idroom:string;
    name: string;
    urlbanner:string;
    idusuario: number;
    constructor(idroom: string, name: string, urlbanner: string, idusuario:number){
        this.idroom = idroom;
        this.name = name;
        this.urlbanner = urlbanner;
        this.idusuario = idusuario;
    }
}