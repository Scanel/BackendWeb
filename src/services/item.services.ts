import { conexion } from "../config/mysql";
import { Item } from "../models/item.model";
import { Response } from "express";

const getCars = async (res: Response) => {
    await conexion.query("SELECT * FROM car", (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const getCar = async (id:string, res: Response) => {
    await conexion.query("SELECT * FROM car WHERE ?", {idcar:id}, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const insertItem = async (item: Item, res: Response) => {
    await conexion.query("INSERT INTO car SET ?", {color: item.color, gas: item.gas, year: item.year, description: item.description, price: item.price}, (error, results) =>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const updateCar = async (id:string, item:Item, res: Response) => {
    await conexion.query("UPDATE car SET ? WHERE idcar = ?", [{color: item.color, gas: item.gas, year: item.year, description: item.description, price: item.price}, id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}

const deleteCar = async (id:string, res: Response) => {
    await conexion.query("DELETE FROM car WHERE ?", {idcar:id} , (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
}


export {insertItem, getCar, getCars, updateCar, deleteCar};