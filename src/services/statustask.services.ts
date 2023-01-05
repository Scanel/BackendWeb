import { conexion } from "../config/mysql";
import { Response } from "express";
import { StatusTask } from "../models/statustask.model";

const gStatusTasks = async (res: Response) => {
    await conexion.query("SELECT * FROM statustask", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const gStatusTask = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM statustask WHERE ?", {idstatus:id}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const pStatusTask = async (item: StatusTask, res: Response) => {
    await conexion.query("INSERT INTO statustask SET ?", {descripcion: item.descripcion}, (error, results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const uStatusTask = async (id:string, item:StatusTask, res: Response) => {
    await conexion.query("UPDATE statustask SET ? WHERE idstatus = ?", [{descripcion: item.descripcion}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const dStatusTask = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM statustask WHERE ?", {idstatus:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pStatusTask, gStatusTasks, gStatusTask, uStatusTask, dStatusTask};