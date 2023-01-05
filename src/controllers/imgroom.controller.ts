import { Request, Response } from "express"
import { dImgRoom, gImgRoom, gImgRooms, pImgRoom, uImgRoom } from "../services/imgroom.services";
import { handleHttp } from "../utils/error.handle"

const getImgRoom = (req: Request, res: Response) => {
    try{
        gImgRoom(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getImgRooms = (req: Request, res: Response) => {
    try{
        gImgRooms(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postImgRoom = async (req: Request, res: Response) => {
    try{
        pImgRoom(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateImgRoom = (req: Request, res: Response) => {
    try{
        uImgRoom(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteImgRoom = (req: Request, res: Response) => {
    try{
        dImgRoom(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getImgRoom,getImgRooms,postImgRoom,updateImgRoom,deleteImgRoom};