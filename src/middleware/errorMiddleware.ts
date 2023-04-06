import httpStatus from "http-status";
import {Errback,Request,Response,NextFunction} from "express"

export function handleAppErrors(err: Error,req: Request,res: Response,next: NextFunction){
    if(err.name === 'ConflictError' || err.name === 'DuplicatedEmailError'){
        return res
        .status(httpStatus.CONFLICT)
        .send({message: err.message})
    }

    if(err.name === 'UnauthorizedError'){
        return res
        .status(httpStatus.UNAUTHORIZED)
        .send({message: err.message})
    }

    if(err.name === 'InvalidCredentialsError'){
        return res
        .status(httpStatus.UNAUTHORIZED)
        .send({message: err.message})
    }

    if(err.name === 'NotFoundError'){
        return res
        .status(httpStatus.NOT_FOUND)
        .send({message: err.message})
    }

    if(err.name === 'InternalServerError'){
        return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({message: err.message})
    }

}