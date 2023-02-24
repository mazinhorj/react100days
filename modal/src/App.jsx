
import './App.css'
import Modal from './components/Modal'
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h1>Modal</h1>
      <div className='btn_modal'>
        <button onClick={() => setOpenModal(true)}>
          Abrir Modal
        </button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <h2>Título do Modal</h2>
        <p>Conteúdo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi corporis enim nemo illo earum quisquam. Esse enim, sunt velit excepturi labore consectetur delectus error. Ex natus voluptatibus illum voluptatem maiores.</p>
      </Modal>
    </div>
  )
}

export default App
