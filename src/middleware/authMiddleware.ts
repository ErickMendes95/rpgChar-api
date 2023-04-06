import { Request,Response,NextFunction } from "express";
import errors from "../errors/index.js";
import jwt from "jsonwebtoken"

async function authValidation(req: Request,res: Response,next: NextFunction){

    const authorization:string = req.headers.authorization;
    if (!authorization) throw errors.unauthorizedError();

    const token: string = authorization.split(" ")[1];
    if(!token) throw errors.unauthorizedError();

    try {
        const data = jwt.verify(token,process.env.JWT_SECRET)
        if(!data) throw errors.unauthorizedError();

        res.locals.user = data
        next();
    } catch (error) {
        next(error)
    }
}

export {
    authValidation
} 