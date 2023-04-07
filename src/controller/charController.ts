import { Request,Response,NextFunction } from "express";
import { NewChar, CharPoints } from "../protocols/char.js";
import charServices from "../services/charServices.js"
import httpStatus from "http-status";

async function getAllChars(req: Request,res: Response,next: NextFunction){

    try {
        const allChars = await charServices.getAll()
        res.send(allChars)
    } catch (error) {
        next(error)
    }
}

async function getChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id

    try {
        const char = await charServices.getChar(id)
        res.send(char)
    } catch (error) {
        next(error)
    }
}

async function createChar(req: Request,res: Response,next: NextFunction){

    const char = req.body as NewChar

    try {
        await charServices.createNewChar(char);
        res.status(httpStatus.CREATED).send("Char created successfully")
    } catch (error) {
        next(error)
    }
}

async function updateChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id
    const points = req.body as CharPoints

    try {
        const updated = await charServices.updatePoints(id,points)
        res.send(updated)
    } catch (error) {
        next(error)
    }
}

async function deleteChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id

    try {
        await charServices.deleteChar(id)
        res.send("Character deleted")
    } catch (error) {
        next(error)
    }
}

export {
    getAllChars,
    getChar,
    createChar,
    updateChar,
    deleteChar
}