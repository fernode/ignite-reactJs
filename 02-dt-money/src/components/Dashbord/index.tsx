import Summary from '../Summary'
import SummaryTable from '../SummaryTable'
import * as S from './styles'

const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <SummaryTable />
    </S.Container>
  )
}

export default Dashboard
