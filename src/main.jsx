import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './components/context/Username.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </UserProvider>
  </BrowserRouter>
)
