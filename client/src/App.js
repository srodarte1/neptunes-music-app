import React, { useContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './containers/LoginForm';
import { Route, Routes } from 'react-router-dom'
import SignupForm from './containers/SignupForm';
import Playlist from './pages/Playlist';
import Friends from './pages/Friends';
import SearchBar from './components/SearchBar';
import Dashboard from './pages/Dashboard';
import { UserContext } from './context/UserContext';
import { PlaylistContext } from './context/PlaylistContext';
import MusicPlayer from './pages/MusicPlayer';
import Account from './pages/Account';

function App() {

  const { user, authUser } = useContext(UserContext)
  const { getPlaylists } = useContext(PlaylistContext)
  
   useEffect(()=>{
    authUser()
    }, [])
    useEffect(() => {
     if (user) getPlaylists(user.id)
    
    }, [user])
    
  return (
    <div className="App">
      {/* <UserProvider> wrap components that need access to UserContext */}
      {user ? <Navbar /> : null}
        <Routes>
          
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/playlists" element={<Playlist />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/music-player" element={<MusicPlayer />} />
              <Route path="/account" element={<Account />} />
              
              {/* <Route path="/music-player" element={<MusicPlayer />} /> */}
           
          
          {/* Always render the LoginForm */}
          <Route path="/" element={<LoginForm />} />
        </Routes>
      {/* </UserProvider> close the UserProvider */}
    </div>
  );
}

export default App;