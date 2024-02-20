import { Request, Response } from "express";
import createUsuario from "./usuario.service";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { CreateUsuarioDTO } from "./usuario.types";


const index = (req: Request, res: Response) => {};
const create = async (req: Request, res: Response) => {
    const usuario: CreateUsuarioDTO = req.body;
    console.log(usuario)
    try {
        const novousuario = await createUsuario(usuario);
        res.status(StatusCodes.CREATED).json(novousuario);
      }
    catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
const read = (req: Request, res: Response) => {}
const update = (req: Request, res: Response) => {}
const remove = (req: Request, res: Response) => {}

export default { create, index, update, remove, read }; 