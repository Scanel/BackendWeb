import { Request, Response } from "express"
import { dAvatar, gAvatar, gAvatars, pAvatar, uAvatar } from "../services/avatar.services";
import { handleHttp } from "../utils/error.handle"

const getAvatar = (req: Request, res: Response) => {
    try{
        gAvatar(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getAvatars = (req: Request, res: Response) => {
    try{
        gAvatars(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postAvatar = async (req: Request, res: Response) => {
    try{
        pAvatar(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateAvatar = (req: Request, res: Response) => {
    try{
        uAvatar(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteAvatar = (req: Request, res: Response) => {
    try{
        dAvatar(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getAvatar,getAvatars,postAvatar,updateAvatar,deleteAvatar};