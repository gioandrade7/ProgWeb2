/* eslint-disable react/jsx-key */
import { getAllProdutos } from "@/fakeDb/produto"
import styles from './produto.module.css'


export default function Home() {
  const produtos = getAllProdutos()
  return (
    <div>
      <h1>Produtos</h1>
        <ul>{produtos.map((prod) => (
          <li className={styles.listaProdutos}>{ prod.nome }</li>
        ))}
      </ul>
    </div>
  )
}





