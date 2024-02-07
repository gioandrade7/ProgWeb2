import { Produto } from "@prisma/client";

export type CreateProdutoDTO = Pick<Produto, "nome" | "preco" | "estoque">
