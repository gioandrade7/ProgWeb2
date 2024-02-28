import { readProduto, updateProduto } from "../produto/produto.service"
import { createCompra, createCompraItem } from "./compra.service"
import { AddProdutoDTO } from "./compra.types"
import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes"


const addCarrinho = async (req: Request, res: Response) => {

    const produtoAdded: AddProdutoDTO = req.body

    if(!req.session.carrinho) req.session.carrinho = []
    
    const produto = await readProduto(produtoAdded.produtoId);

    if(produto){
        if(produto.estoque >= produtoAdded.quantidade){
            req.session.carrinho?.push(produtoAdded);
            return res.status(StatusCodes.OK).json(req.session.carrinho);
        }
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR)
}

const realizarCompra = async (req: Request, res: Response) => {
    const carrinho = req.session.carrinho
    const usuarioId = req.session.uid
    if(!usuarioId || !carrinho) return res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST)

    try{
        const novaCompra = await createCompra({usuarioId})

        carrinho.forEach(async (produto) => {
            const produtoComprado = await createCompraItem({compraId:novaCompra.id, produtoId: produto.produtoId, quantidade:produto.quantidade});

            const produtoBuscado = await readProduto(produtoComprado.produtoId)
            console.log(produtoBuscado)
            if(produtoBuscado){
                const produtoUpdated = await updateProduto(produtoComprado.produtoId, {
                    nome:produtoBuscado.nome, preco: produtoBuscado.preco, estoque: produtoBuscado.estoque - produtoComprado.quantidade
                })
                console.log(produtoUpdated)
            }
        });
        res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
        req.session.carrinho = []
    }catch(e){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
    }
 
}

export default {addCarrinho, realizarCompra}