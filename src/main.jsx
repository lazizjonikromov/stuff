import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
