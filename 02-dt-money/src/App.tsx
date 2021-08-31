import { useState } from 'react'
import Dashboard from './components/Dashbord'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        contentLabel="Example Modal"
      >
        <button onClick={handleCloseNewTransactionModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <GlobalStyle />
    </>
  )
}

export default App
