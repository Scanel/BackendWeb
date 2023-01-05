import { Request, Response } from "express"
import { dRoomUser, gRoomUser, gRoomUsers, pRoomUser, uRoomUser } from "../services/roomuser.services";
import { handleHttp } from "../utils/error.handle"

const getRoomUser = (req: Request, res: Response) => {
    try{
        gRoomUser(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getRoomUsers = (req: Request, res: Response) => {
    try{
        gRoomUsers(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postRoomUser = async (req: Request, res: Response) => {
    try{
        pRoomUser(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateRoomUser = (req: Request, res: Response) => {
    try{
        uRoomUser(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteRoomUser = (req: Request, res: Response) => {
    try{
        dRoomUser(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getRoomUser,getRoomUsers,postRoomUser,updateRoomUser,deleteRoomUser};