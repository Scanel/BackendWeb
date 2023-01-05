import { conexion } from "../config/mysql";
import { Response } from "express";
import { ImgRoom } from "../models/imgroom.model";

const gImgRooms = async (res: Response) => {
    await conexion.query("SELECT * FROM imgroom", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const gImgRoom = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM imgroom WHERE ?", {idimgroom:id}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const pImgRoom = async (item: ImgRoom, res: Response) => {
    await conexion.query("INSERT INTO imgroom SET ?", {urlwall: item.urlwall, urlfloor: item.urlfloor, urltable: item.urltable}, (error, results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const uImgRoom = async (id:string, item:ImgRoom, res: Response) => {
    await conexion.query("UPDATE imgroom SET ? WHERE idimgroom = ?", [{urlwall: item.urlwall, urlfloor: item.urlfloor, urltable: item.urltable}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const dImgRoom = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM imgroom WHERE ?", {idimgroom:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pImgRoom, gImgRooms, gImgRoom, uImgRoom, dImgRoom};