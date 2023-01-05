import { conexion } from "../config/mysql";
import { Response } from "express";
import { User } from "../models/user.model";
import { Resultado } from "../utils/Resultado";

const gUsers = async (res: Response) => {
    await conexion.query("SELECT * FROM user", (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar la lista de usuarios",[]));
            console.log(error.message);
        }else{
            if(results.length < 1)
            {
                res.json(new Resultado(false, "La lista de usuarios está vacía", results));
            }else
            {
                res.json(new Resultado(true, "La lista de usuarios se ha encontrado", results));
            }  
        }
    });
}

const gUser = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM user WHERE ?", {iduser:id}, (error, results)=>{
        if(error){
            res.json(new Resultado(false, "Error al consultar el usuario: " + error,[]));
        }else
        {
            if(results.length < 1)
            {
                res.json(new Resultado(false, "No se encontró el usuario", results));
            }else
            {
                res.json(new Resultado(true, "El Usuario se encontró con éxito", results));
            }
        }
    });
}

const pUser = async (item: User, res: Response) => {
    await conexion.query("SELECT * FROM user WHERE ?", {Email:item.Email}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el correo: " + error, []));
        }else{
            if(results.length < 1){

                conexion.query("INSERT INTO user SET ?", {name: item.name, Apellido1: item.Apellido1, Apellido2: item.Apellido2, Email: item.Email, Password: item.Password, idRol: item.idRol}, (error, results) =>{
                    if(error){
                        res.json(new Resultado(false, "Error al registrar el usuario: " + error, []));
                    }else{
                        let usuario = new Array<User>();
                        usuario[0] = item; 
                        usuario[0].iduser = results.insertId;
                        res.json(new Resultado(true, "Usuario registrado con éxito", usuario));
                    }
                });

            }else{
                res.json(new Resultado(false, "El correo ya se encuentra registrado", []));
            }
        }
    })
}

const uUser = async (id:string, item:User, res: Response) => {
    await conexion.query("SELECT * FROM user WHERE ?", {iduser:id}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el usuario", []));
        }else{
            if(results < 1){
                res.json(new Resultado(false, "No se ha encontrado el usuario", []));
            }else{
                conexion.query("UPDATE user SET ? WHERE iduser = ?", [{name: item.name, Apellido1: item.Apellido1, Apellido2: item.Apellido2}, id], (error, results)=>{
                    if(error){
                        res.json(new Resultado(false, "Error al actualizar el usuario", []));
                    }else{
                        let usuario = new Array<User>();
                        usuario[0] = item; 
                        res.json(new Resultado(true, "Se ha actualizado el usuario con éxito", usuario));
                    }
                });
            }
        }
    });
    
}

const dUser = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM user WHERE ?", {iduser:id}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el usuario", []));
        }else{
            if(results.length < 1){
                res.json(new Resultado(false, "No se ha encontrado el usuario", []));
            }else{
                let usuario = new Array<User>();
                usuario[0] = results; 
                conexion.query("DELETE FROM user WHERE ?", {iduser:id} , (error, results)=>{
                    if(error){
                        res.json(new Resultado(false, "Error al eliminar al usuario", []));
                    }else{
                        res.json(new Resultado(true, "Se ha eliminado el usuario con éxito", usuario));
                    }
                });
            }
        }
    });
}


export {pUser, gUsers, gUser, uUser, dUser};