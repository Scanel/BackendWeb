import { Request, Response } from "express"
import { gRoom, pRoom } from "../services/room.services";
import { handleHttp } from "../utils/error.handle"

const getRoom = (req: Request, res: Response) => {
    try{
        gRoom(req.params.id, res);
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

// const getRooms = (req: Request, res: Response) => {
//     try{
//         gRooms(res);
//     }catch(e){
//         handleHttp(res, "ERROR_GET_ITEMs");
//     }
// }

const postRoom = async (req: Request, res: Response) => {
    try{
        pRoom(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

// const updateRoom = (req: Request, res: Response) => {
//     try{
//         uRoom(req.params.id, req.body, res);
//     }catch(e){
//         handleHttp(res, "ERROR_PUT_ITEM");
//     }
// }

// const deleteRoom = (req: Request, res: Response) => {
//     try{
//         dRoom(req.params.id, res);
//     }catch(e){
//         handleHttp(res, "ERROR_DELETE_ITEM");
//     }
// }

export {getRoom,postRoom};