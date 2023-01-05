import { Request, Response } from "express"
import { dRol, gRol, gRols, pRol, uRol } from "../services/rol.services";
import { handleHttp } from "../utils/error.handle"

const getRol = (req: Request, res: Response) => {
    try{
        gRol(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getRols = (req: Request, res: Response) => {
    try{
        gRols(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postRol = async (req: Request, res: Response) => {
    try{
        pRol(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateRol = (req: Request, res: Response) => {
    try{
        uRol(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteRol = (req: Request, res: Response) => {
    try{
        dRol(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getRol,getRols,postRol,updateRol,deleteRol};