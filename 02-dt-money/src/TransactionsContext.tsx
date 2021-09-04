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

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((response) => {
      setTransaction(response.data.transactions)
    })
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
