import { useEffect, useState } from 'react'
import api from '../../services/api'
import * as S from './styles'

const SummaryTable = () => {
  const [transactions, setTransaction] = useState([])

  useEffect(() => {
    api('http://localhost:3000/api/transactions').then((response) => {
      const { data } = response

      setTransaction(data)
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
          <tr>
            <td>Desenvolvimento Site</td>
            <td>5.000 R$</td>
            <td>Venda</td>
            <td>16/09/2020</td>
          </tr>

          <tr>
            <td>Desenvolvimento Site</td>
            <td>5.000 R$</td>
            <td>Venda</td>
            <td>16/09/2020</td>
          </tr>

          <tr>
            <td>Desenvolvimento Site</td>
            <td>5.000 R$</td>
            <td>Venda</td>
            <td>16/09/2020</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}

export default SummaryTable
