import { conexion } from "../config/mysql";
import { Response } from "express";
import { User } from "../models/user.model";
import { Resultado } from "../utils/Resultado";

const pLogin = async (item: User, res: Response) => {
    await conexion.query("SELECT * FROM user WHERE ?", {Email:item.Email}, (error, results) => {
        if(error){
            res.json(new Resultado(false, "Error al consultar el correo: " + error, []));
        }else{
            if(results.length === 1){

                if(results[0].Password === item.Password){
                    res.json(new Resultado(true, "Inicio de sesion correcto", results));
                }else{
                    res.json(new Resultado(false, "Contraseña incorrecta", []));
                }
            
            }else{
                res.json(new Resultado(false, "No existe el usuario", []));
            }
        }
    })
}


export {pLogin};