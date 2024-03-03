import React, { use } from 'react'
import { useRouter } from 'next/router'
import ProdutoCard from '@/components/produto/ProdutoCard'
import { getOneProduto } from '@/fakeDb/produto'

function Produto() {
    const router = useRouter()
    const produtoId = parseInt(router.query.produtoId as string)
    const produto = getOneProduto(produtoId)
    if (!produto) return <div>Produto não existente !</div>
    return <ProdutoCard produto={produto} />;
}

export default Produto