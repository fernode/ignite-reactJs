import { useState } from 'react'
import Modal from 'react-modal'
import * as S from './styles'
import CloseModal from '../../assets/close.min.svg'
import Income from '../../assets/income.min.svg'
import Outcome from '../../assets/outcome.min.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const [type, setType] = useState('deposity')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de nova transação"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-content__close-btn"
        onClick={onRequestClose}
      >
        <img src={CloseModal} alt="Fechar modal" />
      </button>

      <S.Container action="#">
        <h3>Cadastrar transação</h3>
        <div className="input-container">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Preço" />
          <S.TransactionTypeContainer>
            <S.Button
              onClick={() => setType('deposity')}
              isActive={type === 'deposity'}
              color={'green'}
            >
              <img src={Income} alt="Entrada" />
              <span>Entrada</span>
            </S.Button>

            <S.Button
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              color={'red'}
            >
              <img src={Outcome} alt="Saída" />
              <span>Saída</span>
            </S.Button>
          </S.TransactionTypeContainer>
          <input type="text" placeholder="Categoria" />
          <button className="register-button" type="submit">
            Cadastrar
          </button>
        </div>
      </S.Container>
    </Modal>
  )
}

export default NewTransactionModal
