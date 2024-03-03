import React from 'react'
import { getOneProduto } from '@/fakeDb/produto'

interface ProdutoCardProps {
    produtoId: number
}

function ProdutoCard({produtoId}: ProdutoCardProps) {
    const produto = getOneProduto(produtoId)
    if (!produto) return <div>Produto não encontrado !</div>
  return (
    <div>{produto.nome}</div>
  )
}

export default ProdutoCard