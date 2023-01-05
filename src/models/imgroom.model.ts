export class ImgRoom{
    idimgroom:string;
    urlwall: string;
    urlfloor:string;
    urltable:string;

    constructor(idimgroom: string, urlwall: string, urlfloor: string, urltable: string){
        this.idimgroom = idimgroom;
        this.urlwall = urlwall;
        this.urlfloor = urlfloor;
        this.urltable = urltable;
    }
}