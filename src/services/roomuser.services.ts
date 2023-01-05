import { conexion } from "../config/mysql";
import { Response } from "express";
import { RoomUser } from "../models/roomuser.model";
import { Resultado } from "../utils/Resultado";

const gRoomUsers = async (res: Response) => {
    await conexion.query("SELECT * FROM roomuser", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

// const gRoomUser = async (id:string, res: Response) => {
//     await conexion.query("SELECT * FROM roomuser WHERE ?", {idroom:id}, (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const gRoomUser = async (id:string,  res: Response) => {
    await conexion.query("SELECT * FROM roomuser WHERE ?", {iduser:id}, (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar las salas: " + error,[]));
        }else
        {
            if(results.length < 1)
            {
                res.json(new Resultado(false, "No estás unido a ninguna sala", results));
            }else
            {
                res.json(new Resultado(true, "La salas se encontraron con éxito", results));
            }
        }
    });
}

// const pRoomUser = async (item: RoomUser, res: Response) => {
//     await conexion.query("INSERT INTO roomuser SET ?", {idroom: item.idroom, iduser: item.iduser}, (error, results) =>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const pRoomUser = async (item: RoomUser, res: Response) => {
    await conexion.query("SELECT * FROM room WHERE ?", {idroom:item.idroom}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar las salas: " + error, []));
        }else{
            if(results.length < 1){
                res.json(new Resultado(false, "La sala no existe", []));
            }else{
                conexion.query("SELECT * FROM roomuser WHERE ? AND ?", [{idroom:item.idroom}, {iduser:item.iduser}], (error, results) => {
                    if(error){
                        res.json(new Resultado(false, "Error al consultar las salas: " + error, []));
                    }else{
                        if(results.length < 1){
            
                            conexion.query("INSERT INTO roomuser SET ?", {idroom: item.idroom, iduser: item.iduser}, (error, results) =>{
                                if(error){
                                    res.json(new Resultado(false, "Error al unirse a una nueva sala: " + error, []));
                                }else{
                                    let userroom = new Array<RoomUser>();
                                    userroom[0] = item; 
                                    res.json(new Resultado(true, "Bienvenido a la clase", userroom));
                                }
                            });
            
                        }else{
                            res.json(new Resultado(false, "Ya estás unido a la sala", []));
                        }
                    }
                })
            }
            
        }
    })
    
}

const uRoomUser = async (id:string, item:RoomUser, res: Response) => {
    await conexion.query("UPDATE roomuser SET ? WHERE idroom = ?", [{idroom: item.idroom, iduser: item.iduser}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const dRoomUser = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM roomuser WHERE ?", {idroom:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pRoomUser, gRoomUsers, gRoomUser, uRoomUser, dRoomUser};