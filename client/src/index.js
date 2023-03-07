import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SongProvider} from './context/SongContext'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { UserProvider } from './context/UserContext'
import { PlaylistProvider } from './context/PlaylistContext';

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <SongProvider>
      <PlaylistProvider>
        <App />
    </PlaylistProvider>
    </SongProvider>
    </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);




