import { Request, Response } from "express";
import {createUsuario, listUsuario, readUsuario, removeUsuario, updateUsuario, usuarioAlreadyExists } from "./usuario.service";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { CreateUsuarioDTO, UpdateUsuarioDTO } from "./usuario.types";


const index = async (req: Request, res: Response) => {
  try {
    const usuario = await listUsuario();
    res.status(StatusCodes.OK).json(usuario);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

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

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await readUsuario(id);
    if (!usuario) {
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    }
    return res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuarioAntigo = await readUsuario(id);
  const usuarioNovo: UpdateUsuarioDTO = req.body;

  try {
    if (
      (usuarioAntigo?.email === usuarioNovo.email) ||
      !(await usuarioAlreadyExists(usuarioNovo.email))
    ) {
      const novoUsuario = await updateUsuario(id, usuarioNovo);
      res.status(StatusCodes.OK).json(novoUsuario);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

const remove = async (req: Request, res: Response) => {
  const usuarioId  = req.params.id;
  console.log(usuarioId)
  try {
    console.log("oi")
    await removeUsuario(usuarioId);
    res.status(StatusCodes.OK).json(StatusCodes.OK);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { create, index, update, remove, read }; 