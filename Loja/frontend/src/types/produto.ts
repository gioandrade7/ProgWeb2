export interface Produto {
    id: number
    nome: string,
    preco: number,
    estoque:number
}

export type CreateProdutoDto = Pick<Produto, "nome" | "estoque" | "preco">
export type UpdateProdutoDto = Pick<Produto, "nome" | "estoque" | "preco">