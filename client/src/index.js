import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SongProvider} from './context/SongContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <SongProvider>
        <App />
    </SongProvider>
    </BrowserRouter>,
  document.getElementById('root')
);




