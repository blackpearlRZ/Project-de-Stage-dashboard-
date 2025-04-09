import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Login from './login.jsx'
import Layout from './components/Layout/layout.jsx'
import { Provider } from 'react-redux'
import { AmanaReducers } from './redux/amanaReducers.js'
import { legacy_createStore as createStore } from 'redux'

const storeAmana = createStore(AmanaReducers)

createRoot(document.getElementById('root')).render(
  <Provider store={storeAmana}>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </Provider>
)
