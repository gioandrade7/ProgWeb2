import React, { use } from 'react'
import { useRouter } from 'next/router'
import ProdutoCard from '@/components/produto/ProdutoCard'
import { getOneProduto } from '@/fakeDb/produto'

function ProdutoCardPage() {
    const router = useRouter()
    const id = router.query.produtoId as string
    return <ProdutoCard id={id} />;
}

export default ProdutoCardPage;