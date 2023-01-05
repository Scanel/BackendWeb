import { conexion } from "../config/mysql";
import { Response } from "express";
import { Rol } from "../models/rol.model";

const gRols = async (res: Response) => {
    await conexion.query("SELECT * FROM rol", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const gRol = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM rol WHERE ?", {idRol:id}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const pRol = async (item: Rol, res: Response) => {
    await conexion.query("INSERT INTO rol SET ?", {descripcion: item.descripcion}, (error, results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const uRol = async (id:string, item:Rol, res: Response) => {
    await conexion.query("UPDATE rol SET ? WHERE idrol = ?", [{descripcion: item.descripcion}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const dRol = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM rol WHERE ?", {idRol:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pRol, gRols, gRol, uRol, dRol};