import { Request,Response,NextFunction } from "express"
import {SignIn,SignUp} from "../protocols/user.js"
import userServices from "../services/userServices.js"
import httpStatus from "http-status";

async function login(req: Request,res: Response,next: NextFunction){

    const user = req.body as SignIn;

    try {

        const token = await userServices.signin(user)
        res.send({token})
        
    } catch (error) {
        next(error)
    }
}

async function signup(req: Request,res: Response,next: NextFunction){
    
    const user = req.body as SignUp

    try {

        await userServices.signup(user)
        res.status(httpStatus.CREATED).send("Conta cadastrada com sucesso")
    } catch (error) {
        next(error)
    }
}

export {
    login,
    signup,
}