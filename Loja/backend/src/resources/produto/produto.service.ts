import { PrismaClient, Produto } from "@prisma/client"; 
import { CreateProdutoDTO } from "./produto.types"

const prisma = new PrismaClient()

export const listProduto = async (): Promise<Produto[]> => {
    return await prisma.produto.findMany()
}

export const produtoAlreadyExists = async (nome: string): Promise<boolean> => {
    return !!(await prisma.produto.findUnique({ where: { nome } }))
}

export const createProduto = async (produto: CreateProdutoDTO): Promise<Produto> => {
    return await prisma.produto.create({data: produto})
}

