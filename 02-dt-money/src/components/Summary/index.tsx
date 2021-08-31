import { useEffect } from 'react'
import * as S from './styles'
import Income from '../../assets/income.min.svg'
import Outcome from '../../assets/outcome.min.svg'
import Total from '../../assets/total.min.svg'
import api from '../../services/api'

const Summary = () => {
  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <S.Container>
      <S.Content>
        <header>
          <h3>Entradas</h3>
          <img src={Income} alt="Icone Seta para cima" />
        </header>

        <div>
          <p>R$ 17.400</p>
        </div>
      </S.Content>

      <S.Content>
        <header>
          <h3>Saídas</h3>
          <img src={Outcome} alt="Icone Seta para baixo" />
        </header>

        <div>
          <p>R$ 1.259,00</p>
        </div>
      </S.Content>

      <S.Content background={true}>
        <header>
          <h3>Total</h3>
          <img src={Total} alt="Icone cifrão" />
        </header>

        <div>
          <p>R$ 16.141,00</p>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default Summary
