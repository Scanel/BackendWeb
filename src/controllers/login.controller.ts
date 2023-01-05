import { Request, Response } from "express"
import { pLogin } from "../services/login.services";
import { handleHttp } from "../utils/error.handle"

const postLogin = async (req: Request, res: Response) => {
    try{
        pLogin(req.body, res);
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM");
    }
}

export {postLogin};