import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertItem, updateCar } from "../services/item.services";
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try{
        getCar(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getItems = (req: Request, res: Response) => {
    try{
        getCars(res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMs");
    }
}

const postItem = async (req: Request, res: Response) => {
    try{
        insertItem(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

const updateItem = (req: Request, res: Response) => {
    try{
        updateCar(req.params.id, req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_PUT_ITEM");
    }
}

const deleteItem = (req: Request, res: Response) => {
    try{
        deleteCar(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getItem,getItems,postItem,updateItem,deleteItem};