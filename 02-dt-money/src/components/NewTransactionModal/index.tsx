import Modal from 'react-modal'
import * as S from './styles'
import CloseModal from '../../assets/close.min.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
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

      <S.Container>
        <h3>Cadastrar transação</h3>
        <div className="input-container">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </div>
      </S.Container>
    </Modal>
  )
}

export default NewTransactionModal
