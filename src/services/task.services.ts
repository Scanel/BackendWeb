import { conexion } from "../config/mysql";
import { Response } from "express";
import { Task } from "../models/task.model";
import { Resultado } from "../utils/Resultado";

const gTasks = async (res: Response) => {
    await conexion.query("SELECT * FROM task", (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar la lista de tareas",[]));
            console.log(error.message);
        }else{
            if(results.length < 1)
            {
                res.json(new Resultado(false, "La lista de tareas está vacía", results));
            }else
            {
                res.json(new Resultado(true, "La lista de tareas se ha encontrado", results));
            }  
        }
    });
}

const gTask = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM task WHERE ?", {idroom:id}, (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar las tareas: " + error,[]));
        }else
        {
            if(results.length < 1)
            {
                res.json(new Resultado(false, "No se encontraron tareas", results));
            }else
            {
                res.json(new Resultado(true, "Las tareas se encontraron con éxito", results));
            }
        }
    });
}

const pTask = async (item: Task, res: Response) => {
    await conexion.query("SELECT * FROM task WHERE ?", {idroom:item.idroom}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar la sala: " + error, []));
        }else{
            if(results.length < 1){

                conexion.query("INSERT INTO task SET ?", {idroom: item.idroom, titulo: item.titulo, descripcion: item.descripcion, r1: item.r1, r2: item.r2, r3: item.r3, r4: item.r4}, (error, results) =>{
                    if(error){
                        res.json(new Resultado(false, "Error al registrar la tarea: " + error, []));
                    }else{
                        let tarea = new Array<Task>();
                        tarea[0] = item; 
                        tarea[0].idtask = results.insertId;
                        res.json(new Resultado(true, "Tarea registrada con éxito", tarea));
                    }
                });

            }else{
                res.json(new Resultado(false, "La Tarea ya se encuentra registrada", []));
            }
        }
    })
}

export {pTask, gTasks, gTask};