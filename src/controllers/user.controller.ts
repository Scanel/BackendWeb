import { Request, Response } from "express"
import { dUser, gUser, gUsers, pUser, uUser } from "../services/user.services";
import { handleHttp } from "../utils/error.handle"

const getUser = (req: Request, res: Response) => {
    try{
        gUser(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getUsers = (req: Request, res: Response) => {
    try{
        gUsers(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postUser = async (req: Request, res: Response) => {
    try{
        pUser(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateUser = (req: Request, res: Response) => {
    try{
        uUser(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteUser = (req: Request, res: Response) => {
    try{
        dUser(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getUser,getUsers,postUser,updateUser,deleteUser};