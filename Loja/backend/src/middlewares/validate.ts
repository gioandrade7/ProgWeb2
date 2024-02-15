import { NextFunction, Request, Response } from "express"; 
import { ObjectSchema } from "joi"; 
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const validate = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { 
            abortEarly: false
        })
        if(error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error.details)
        }
        else next();
    }
}

export default validate