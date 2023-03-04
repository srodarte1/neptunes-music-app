import React, { useContext } from 'react';
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

function App() {

  const { user } = useContext(UserContext)

  return (
    <div className="App">
      {/* <UserProvider> wrap components that need access to UserContext */}
        <Routes>
          {/* Conditionally render the Navbar and SearchBar only if the user is signed in */}
          {user && (
            <>
              <Navbar />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/playlists" element={<Playlist />} />
              <Route path="/friends" element={<Friends />} />
              {/* <Route path="/music-player" element={<MusicPlayer />} /> */}
            </>
          )}
          {/* Always render the LoginForm */}
          <Route path="/" element={<LoginForm />} />
        </Routes>
      {/* </UserProvider> close the UserProvider */}
    </div>
  );
}

export default App;