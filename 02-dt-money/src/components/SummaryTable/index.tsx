import { useEffect, useState } from 'react'
import api from '../../services/api'
import * as S from './styles'

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

const SummaryTable = () => {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((response) => {
      setTransaction(response.data.transactions)
    })
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  )
}

export default SummaryTable
