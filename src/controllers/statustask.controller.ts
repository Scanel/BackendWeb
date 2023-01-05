import { Request, Response } from "express"
import { dStatusTask, gStatusTask, gStatusTasks, pStatusTask, uStatusTask } from "../services/statustask.services";
import { handleHttp } from "../utils/error.handle"

const getStatusTask = (req: Request, res: Response) => {
    try{
        gStatusTask(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getStatusTasks = (req: Request, res: Response) => {
    try{
        gStatusTasks(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postStatusTask = async (req: Request, res: Response) => {
    try{
        pStatusTask(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateStatusTask = (req: Request, res: Response) => {
    try{
        uStatusTask(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteStatusTask = (req: Request, res: Response) => {
    try{
        dStatusTask(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getStatusTask,getStatusTasks,postStatusTask,updateStatusTask,deleteStatusTask};