import { Compra, CompraItem, PrismaClient } from "@prisma/client";
import { CompraDTO, CompraProdutoDTO } from "./compra.types";

const prisma = new PrismaClient()

export const createCompra = async (compra: CompraDTO): Promise<Compra> => {
  return await prisma.compra.create({ data: compra });
};

export const createCompraItem = async (item: CompraProdutoDTO):Promise<CompraItem> => {
  return await prisma.compraItem.create({ data: item });
};
