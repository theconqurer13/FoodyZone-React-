import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding:0;
  }
  body{
    background-color:#5A5959;
  }

`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
