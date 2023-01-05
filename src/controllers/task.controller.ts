import { Request, Response } from "express"
import { gTask, gTasks, pTask } from "../services/task.services";
import { handleHttp } from "../utils/error.handle"

const getTask = (req: Request, res: Response) => {
    try{
        gTask(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getTasks = (req: Request, res: Response) => {
    try{
        gTasks(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postTask = async (req: Request, res: Response) => {
    try{
        pTask(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

export {getTask,getTasks,postTask};