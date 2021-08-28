import Logo from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Dt Money" />
        <button type="button">Nova transação</button>
      </S.Content>
    </S.Container>
  )
}
