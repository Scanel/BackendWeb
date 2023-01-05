export class Avatar{
    idAvatar:number;
    urlHair:string;
    urlSkin:string;
    urlBody:string;
    urlLegs:string;
    urlEyes:string;
    urlFeet:string;
    iduser: number;

    constructor(idavatar: number, urlHair: string, urlSkin: string,  urlBody:string, urlLegs: string, urlEyes: string, urlFeet: string,iduser:number){
        this.idAvatar = idavatar;
        this.urlHair = urlHair;
        this.urlSkin = urlSkin;
        this.urlBody = urlBody;
        this.urlLegs = urlLegs;
        this.urlEyes = urlEyes;
        this.urlFeet = urlFeet;
        this.iduser = iduser;
    }
}