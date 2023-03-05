import React, { useState, createContext } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const SongContext = createContext();

const SongProvider = (props) => {
  const [currentSong, setCurrentSong] = useState(null);

  const searchSongs = async (searchTerm) => {
    const cacheKey = `search-${searchTerm}`;
    const cachedData = localStorage.getItem(cacheKey);
  
    if (cachedData) {
      setCurrentSong(JSON.parse(cachedData)[0]);
    } else {
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=25`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        const songData = data.tracks.items;
  
        // Cache the song data in localStorage
        localStorage.setItem(cacheKey, JSON.stringify(songData));
        
        // Handle fetched songs data and update the state with the results
        // For example, you can set the first song from the search results as the current song
        setCurrentSong(songData[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <SongContext.Provider value={{ currentSong, searchSongs }}>
      {props.children}
    </SongContext.Provider>
  );
};

export  { SongContext, SongProvider }
