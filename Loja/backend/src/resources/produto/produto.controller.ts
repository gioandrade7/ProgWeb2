import {Response, Request} from "express"
import { createProduto, listProduto, produtoAlreadyExists } from "./produto.service";
import { CreateProdutoDTO } from "./produto.types";

const index = async (req: Request, res: Response) => {

  try {
    const produto = await listProduto();
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json(error);
  }

};

const create= async(req: Request, res: Response) => {
  const produto: CreateProdutoDTO = req.body;
  try {
    if(await produtoAlreadyExists(produto.nome)){
      res.status(400).json({ msg: "Produto já existe " })
    }
    else{
      const novoProduto = await createProduto(produto);
      res.status(201).json(novoProduto);
    }
  } 
  catch (error) {
    res.status(500).json(error)
  }
}


const read= async(req: Request, res: Response) => {}
const update = async(req: Request, res: Response) => {}
const remove = async(req: Request, res: Response) => {}

export default {create, index, update, remove, read}
