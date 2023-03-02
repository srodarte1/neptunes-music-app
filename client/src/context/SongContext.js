import React, { useState, createContext } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const SongContext = createContext();

const SongProvider = (props) => {
  const [currentSong, setCurrentSong] = useState(null);

  const searchSongs = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
        },
      });
      const data = await response.json();
      // Handle fetched songs data and update the state with the results
      // For example, you can set the first song from the search results as the current song
      setCurrentSong(data.tracks.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SongContext.Provider value={{ currentSong, searchSongs }}>
      {props.children}
    </SongContext.Provider>
  );
};

export  { SongContext, SongProvider }
