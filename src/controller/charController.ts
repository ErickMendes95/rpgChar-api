import { NewChar, CharPoints } from "../protocols/char.js";
import { Request,Response,NextFunction } from "express";
import userServices from "../services/charServices.js"

async function getAllChars(req: Request,res: Response,next: NextFunction){

    try {
        const allChars = await userServices.getAll()
        res.send(allChars)
    } catch (error) {
        next(error)
    }
}

async function getChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id

    try {
        const char = await userServices.getChar(id)
        res.send(char)
    } catch (error) {
        next(error)
    }
}

async function createChar(req: Request,res: Response,next: NextFunction){

    const char = req.body as NewChar

    try {
        const created = await userServices.createNewChar(char);
    } catch (error) {
        next(error)
    }
}

async function updateChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id
    const points = req.body as CharPoints

    try {
        const updated = await userServices.updatePoints(id,points)
        res.send(updated)
    } catch (error) {
        next(error)
    }
}

async function deleteChar(req: Request,res: Response,next: NextFunction){

    const id: number = +req.params.id

    try {
        await userServices.deleteChar(id)
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