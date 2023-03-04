import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SongProvider} from './context/SongContext'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <SongProvider>
        <App />
    </SongProvider>
    </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);




