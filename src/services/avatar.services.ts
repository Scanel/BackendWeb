import { conexion } from "../config/mysql";
import { Response } from "express";
import { Avatar } from "../models/avatar.model";
import { Resultado } from "../utils/Resultado";

const gAvatars = async (res: Response) => {
    await conexion.query("SELECT * FROM avatar", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

// const gAvatar = async (id:string, res: Response) => {
//     await conexion.query("SELECT * FROM avatar WHERE ?", {idAvatar:id}, (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const gAvatar = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM avatar WHERE ?", {iduser:id}, (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar el avatar: " + error,[]));
        }else
        {
            if(results.length < 1)
            {
                res.json(new Resultado(false, "No se encontró el avatar", results));
            }else
            {
                res.json(new Resultado(true, "El avatar se encontró con éxito", results));
            }
        }
    });
}

// const pAvatar = async (item: Avatar, res: Response) => {
//     await conexion.query("INSERT INTO avatar SET ?", {urlHair: item.urlHair, urlSkin: item.urlSkin, urlBody: item.urlBody, urlLegs: item.urlLegs, urlEyes: item.urlEyes, urlFeet: item.urlFeet}, (error, results) =>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const pAvatar = async (item: Avatar, res: Response) => {
    await conexion.query("SELECT * FROM avatar WHERE ?", {iduser:item.iduser}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el avatar: " + error, []));
        }else{
            if(results.length < 1){

                conexion.query("INSERT INTO avatar SET ?", {urlHair: item.urlHair, urlSkin: item.urlSkin, urlBody: item.urlBody, urlLegs: item.urlLegs, urlEyes: item.urlEyes, urlFeet: item.urlFeet, iduser: item.iduser}, (error, results) =>{
                    if(error){
                        res.json(new Resultado(false, "Error al registrar el avatar: " + error, []));
                    }else{
                        let avatar = new Array<Avatar>();
                        avatar[0] = item; 
                        res.json(new Resultado(true, "Avatar registrado con éxito", avatar));
                    }
                });

            }else{
                res.json(new Resultado(false, "El avatar ya se encuentra registrado", []));
            }
        }
    })
}

// const uAvatar = async (id:string, item:Avatar, res: Response) => {
//     await conexion.query("UPDATE avatar SET ? WHERE idavatar = ?", [{urlHair: item.urlHair, urlSkin: item.urlSkin, urlBody: item.urlBody, urlLegs: item.urlLegs, urlEyes: item.urlEyes, urlFeet: item.urlFeet}, id], (error, results)=>{
//         if(error){
//             throw error;
//         }else{
//             res.send(results);
//         }
//     });
// }

const uAvatar = async (id:string, item:Avatar, res: Response) => {
    await conexion.query("SELECT * FROM avatar WHERE ?", {iduser:id}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el avatar", []));
        }else{
            if(results < 1){
                res.json(new Resultado(false, "No se ha encontrado el avatar", []));
            }else{
                conexion.query("UPDATE avatar SET ? WHERE iduser = ?", [{urlHair: item.urlHair, urlSkin: item.urlSkin, urlBody: item.urlBody, urlLegs: item.urlLegs, urlEyes: item.urlEyes, urlFeet: item.urlFeet}, id], (error, results)=>{
                    if(error){
                        res.json(new Resultado(false, "Error al actualizar el avatar", []));
                    }else{
                        let avatar = new Array<Avatar>();
                        avatar[0] = item; 
                        res.json(new Resultado(true, "Se ha actualizado el avatar con éxito", avatar));
                    }
                });
            }
        }
    });
    
}

const dAvatar = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM avatar WHERE ?", {idavatar:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {pAvatar, gAvatars, gAvatar, uAvatar, dAvatar};