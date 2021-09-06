import { useContext } from 'react'
import * as S from './styles'
import Income from '../../assets/income.min.svg'
import Outcome from '../../assets/outcome.min.svg'
import Total from '../../assets/total.min.svg'
import { TransactionsContext } from '../../TransactionsContext'

const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposity') {
        acc.deposities += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.widthdraws += transaction.amount
        acc.total += transaction.amount
      }

      return acc
    },
    {
      deposities: 0,
      widthdraws: 0,
      total: 0
    }
  )

  return (
    <S.Container>
      <S.Content>
        <header>
          <h3>Entradas</h3>
          <img src={Income} alt="Icone Seta para cima" />
        </header>

        <div>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposities)}
          </p>
        </div>
      </S.Content>

      <S.Content>
        <header>
          <h3>Saídas</h3>
          <img src={Outcome} alt="Icone Seta para baixo" />
        </header>

        <div>
          <p>
            -{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.widthdraws)}
          </p>
        </div>
      </S.Content>

      <S.Content background={true}>
        <header>
          <h3>Total</h3>
          <img src={Total} alt="Icone cifrão" />
        </header>

        <div>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
          </p>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default Summary
