import { createContext, useEffect, useState, ReactNode } from 'react'
import api from './services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

interface TransactionProviderProps {
  children: ReactNode
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContentData {
  transactions: Transaction[]
  createTransactions: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContentData>(
  {} as TransactionsContentData
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((response) => {
      setTransaction(response.data.transactions)
    })
  }, [])

  function createTransactions({
    type,
    title,
    amount,
    category
  }: TransactionInput) {
    const body = {
      type,
      title,
      amount,
      category
    }

    api.post('/transactions', body)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
