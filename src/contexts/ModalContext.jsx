import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

  const [open, setOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleModal = (sentence) => {
    setModalMessage(sentence)
    setOpen(true)
  }

  return(
    <ModalContext.Provider value={{open, setOpen, handleModal, modalMessage}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}