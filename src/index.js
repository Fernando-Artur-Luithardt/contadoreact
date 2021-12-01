import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contador from "./componentes/contador"

ReactDOM.render(
 <div>
    <Contador />
    <App />
    <Contador />
 
 </div>,
   
 
  document.getElementById('root')
);
