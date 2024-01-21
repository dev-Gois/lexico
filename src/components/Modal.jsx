import { useState, useEffect } from 'react'
import { useModal } from '../contexts/ModalContext'

export const Modal = () => {

  const [showModal, setShowModal] = useState('hidden')
  const { open, setOpen, modalMessage } = useModal();

  useEffect(() => {
    if(open) {
      setShowModal('animate-jump-in')

      setTimeout(() => {
        setShowModal('animate-jump-out')
        setOpen(false)
      }, 1800)
    }
  }, [open])
  

  return (
    <div class='z-50 fixed left-1/2 top-[8vh] transform -translate-x-1/2'>
        <div class={`flex shadow-md bg-modal-primary rounded-lg h-[3vw] p-2 items-center ${showModal}`}>
            <h1 class='font-poppins text-white'>{modalMessage}</h1>
        </div>
    </div>
  )
}
