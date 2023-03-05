import React, { useState, useContext } from 'react';
import { SongContext } from '../context/SongContext';

const SearchPage = () => {
  const { currentSong, searchSongs } = useContext(SongContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchSongs(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {currentSong && (
        <div>
          <h2>{currentSong.name}</h2>
          <p>By {currentSong.artists.map((artist) => artist.name).join(', ')}</p>
          <audio src={currentSong.preview_url} controls />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
