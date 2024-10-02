'use client'
import { produtos } from '@/core'
// import useProdutos from '@/data/hooks/useProdutos'
import ProdutoItem from './ProdutoItem'
import ProdutoNaoEncontrado from './ProdutoNaoEncontrado'

export default function ListaProdutos() {
    // Verificar se produtos existe e tem itens
    return produtos && produtos.length > 0 ? (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {produtos.map((produto) => (
                <ProdutoItem produto={produto} key={produto.id} />
            ))}
        </div>
    ) : (
        <ProdutoNaoEncontrado semBotaVoltar />
    );
}
