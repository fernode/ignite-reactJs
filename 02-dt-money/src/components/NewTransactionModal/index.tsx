import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import * as S from './styles'
import CloseModal from '../../assets/close.min.svg'
import Income from '../../assets/income.min.svg'
import Outcome from '../../assets/outcome.min.svg'
import { TransactionsContext } from '../../TransactionsContext'

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
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const transactions = useContext(TransactionsContext)

  function handleNewTransaction(e: FormEvent) {
    e.preventDefault()

    transactions.createTransactions({ type, title, amount, category })
  }

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

      <S.Container onSubmit={(e) => handleNewTransaction(e)}>
        <h3>Cadastrar transação</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            min="1"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <S.TransactionTypeContainer>
            <S.Button
              onClick={() => setType('deposity')}
              isActive={type === 'deposity'}
              color={'green'}
              type="button"
            >
              <img src={Income} alt="Entrada" />
              <span>Entrada</span>
            </S.Button>

            <S.Button
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              color={'red'}
              type="button"
            >
              <img src={Outcome} alt="Saída" />
              <span>Saída</span>
            </S.Button>
          </S.TransactionTypeContainer>
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="register-button" type="submit">
            Cadastrar
          </button>
        </div>
      </S.Container>
    </Modal>
  )
}

export default NewTransactionModal
