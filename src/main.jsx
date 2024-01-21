import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GeneralProvider } from './contexts/GeneralContext.jsx'
import { ModalProvider } from './contexts/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <GeneralProvider>
        <App /> 
      </GeneralProvider>
    </ModalProvider>
  </React.StrictMode>,
)
