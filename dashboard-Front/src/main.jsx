import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Login from './login.jsx'
import Layout from './components/Layout/layout.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
)
