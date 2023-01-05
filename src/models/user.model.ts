export class User{
    iduser:number;
    name: string;
    Apellido1:string;
    Apellido2:string;
    Email:string;
    Password:string;
    idRol:number;

    constructor(iduser: number, name: string, apellido1: string, apellido2: string,  Email:string, Password: string, idRol: number){
        this.iduser = iduser;
        this.name = name;
        this.Apellido1 = apellido1;
        this.Apellido2 = apellido2;
        this.Email = Email;
        this.Password = Password;
        this.idRol = idRol;
    }
}