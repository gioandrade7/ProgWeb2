import { Compra, CompraItem} from "@prisma/client";


export type AddProdutoDTO = Pick<CompraItem, "produtoId" | "quantidade">;
export type CompraProdutoDTO = Pick<CompraItem, "compraId" | "produtoId" | "quantidade">;
export type CompraDTO = Pick<Compra, "usuarioId">;
