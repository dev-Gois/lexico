import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Keyboard } from './components/Keyboard'
import { SquareGroup } from './components/SquareGroup'
import { useGeneral } from './contexts/GeneralContext'
import { Modal } from './components/Modal'
import { useModal } from './contexts/ModalContext'

function App() {

  const { handleKeyUp } = useGeneral();
  const { handleModal } = useModal();

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, true);

    return () => {
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, [handleKeyUp]);
  
  useEffect(() => {
    handleModal('Bem vindo ao léxico!')
  }, [])
  

  return (
    <div >
      <Modal/>
      <div className='h-full w-full space-y-6' >
        <Header/>
        <SquareGroup/>
        <Keyboard/>
      </div>
    </div>
  )
}

export default App
