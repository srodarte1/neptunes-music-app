import React, { useState, useContext } from 'react';
import { SongContext } from '../context/SongContext';

const SearchBar = () => {
  const { searchSongs } = useContext(SongContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    searchSongs(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a song"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar