import { conexion } from "../config/mysql";
import { Response } from "express";
import { Room } from "../models/room.model";
import { Resultado } from "../utils/Resultado";

// const gRooms = async (res: Response) => {
//     await conexion.query("SELECT * FROM room", (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

// const gRoom = async (id:string, res: Response) => {
//     await conexion.query("SELECT * FROM room WHERE ?", {idroom:id}, (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const gRoom = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM room WHERE ?", {idroom:id}, (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar la sala: " + error,[]));
        }else
        {
            if(results.length < 1)
            {
                res.json(new Resultado(false, "La sala no se encontró", results));
            }else
            {
                res.json(new Resultado(true, "La sala se encontró con éxito", results));
            }
        }
    });
}

// const pRoom = async (item: Room, res: Response) => {
//     await conexion.query("INSERT INTO room SET ?", {idroom: item.idroom, name: item.name, urlbanner: item.urlbanner, idimgroom: item.idimgroom, totaluser: item.totaluser}, (error, results) =>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const pRoom = async (item: Room, res: Response) => {
    await conexion.query("SELECT * FROM room WHERE ?", {idroom:item.idroom}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar las salas: " + error, []));
        }else{
            if(results.length < 1){

                conexion.query("INSERT INTO room SET ?", {idroom: item.idroom, name: item.name, urlbanner: item.urlbanner, idusuario: item.idusuario}, (error, results) =>{
                    if(error){
                        res.json(new Resultado(false, "Error al crear una nueva sala: " + error, []));
                    }else{
                        let room = new Array<Room>();
                        room[0] = item; 
                        res.json(new Resultado(true, "Sala creada con éxito", room));
                    }
                });

            }else{
                res.json(new Resultado(false, "La sala ya está registrada", []));
            }
        }
    })
}

// const uRoom = async (id:string, item:Room, res: Response) => {
//     await conexion.query("UPDATE room SET ? WHERE idroom = ?", [{name: item.name, urlbanner: item.urlbanner, idimgroom: item.idimgroom, totaluser: item.totaluser}, id], (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

// const dRoom = async (id:string, res: Response) => {
//     await conexion.query("DELETE FROM room WHERE ?", {idroom:id} , (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }


export {pRoom, gRoom};