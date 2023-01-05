import { Request, Response } from "express"
import { dTypeTask, gTypeTask, gTypeTasks, pTypeTask, uTypeTask } from "../services/typetask.services";
import { handleHttp } from "../utils/error.handle"

const getTypeTask = (req: Request, res: Response) => {
    try{
        gTypeTask(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getTypeTasks = (req: Request, res: Response) => {
    try{
        gTypeTasks(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postTypeTask = async (req: Request, res: Response) => {
    try{
        pTypeTask(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateTypeTask = (req: Request, res: Response) => {
    try{
        uTypeTask(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteTypeTask = (req: Request, res: Response) => {
    try{
        dTypeTask(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getTypeTask,getTypeTasks,postTypeTask,updateTypeTask,deleteTypeTask};