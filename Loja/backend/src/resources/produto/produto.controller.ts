import {Response, Request} from "express"
import { createProduto, updateProduto, listProduto, produtoAlreadyExists, readProduto, removeProduto } from "./produto.service";
import { CreateProdutoDTO, UpdateProdutoDTO } from "./produto.types";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";

const index = async (req: Request, res: Response) => {

  try {
    const produto = await listProduto();
    res.status(StatusCodes.OK).json(produto);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }

};

const create= async(req: Request, res: Response) => {
  const produto: CreateProdutoDTO = req.body;
  try {
    if(await produtoAlreadyExists(produto.nome)){
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT)
    }
    else{
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    }
  } 
  catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

const update = async(req: Request, res: Response) => {
  const { id } = req.params;
  const produtoAntigo = await readProduto(id)
  const produtoNovo: UpdateProdutoDTO = req.body;
  
  try {
    if ((await produtoAlreadyExists(produtoNovo.nome) && produtoAntigo?.nome === produtoNovo.nome) || (!(await produtoAlreadyExists(produtoNovo.nome)))){
      const novoProduto = await updateProduto(id, produtoNovo);
      res.status(StatusCodes.OK).json(novoProduto);
      
    }
    else{
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } 
  catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

const read= async(req: Request, res: Response) => {
  const { id } = req.params
  try{
    const produto = await readProduto(id)
    if(!produto){
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
    }
    return res.status(StatusCodes.OK).json(produto)
  }
  catch(err){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

const remove = async(req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const produto = removeProduto(id)
    return res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

export default {create, index, update, remove, read}
