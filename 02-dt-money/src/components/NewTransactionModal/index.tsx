import Modal from 'react-modal'
import * as S from './styles'
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
        close
      </button>
      <S.Container>
        <h3>Cadastrar transação</h3>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Preço" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}

export default NewTransactionModal
