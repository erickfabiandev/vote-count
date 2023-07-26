import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { CountProvider } from './store/CountContext.jsx'
import { FilterProvider } from './store/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <FilterProvider>
        <App />
      </FilterProvider>      
    </CountProvider>    
  </React.StrictMode>,
)
