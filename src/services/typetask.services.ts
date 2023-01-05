import { conexion } from "../config/mysql";
import { Response } from "express";
import { TypeTask } from "../models/typetask.model";

const gTypeTasks = async (res: Response) => {
    await conexion.query("SELECT * FROM typetask", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const gTypeTask = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM typetask WHERE ?", {idTypeTask:id}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const pTypeTask = async (item: TypeTask, res: Response) => {
    await conexion.query("INSERT INTO typetask SET ?", {descripcion: item.descripcion}, (error, results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const uTypeTask = async (id:string, item:TypeTask, res: Response) => {
    await conexion.query("UPDATE typetask SET ? WHERE idTypeTask = ?", [{descripcion: item.descripcion}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const dTypeTask = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM typetask WHERE ?", {idTypeTask:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pTypeTask, gTypeTasks, gTypeTask, uTypeTask, dTypeTask};