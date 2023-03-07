import React, { useState, createContext, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const SongContext = createContext();

const SongProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [genres, setGenres] = useState([]);
  const client_id = '8f1ef24269554341bfebf33e0cd56c71';
  const client_secret = 'f8d5685d0f8340c7a4c24d92a1abe83e';
  
  
  const authorization = btoa(`${client_id}:${client_secret}`);

  const getAccessToken = async () => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authorization}`
        },
        body: 'grant_type=client_credentials'
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const searchSongs = async (searchTerm) => {
    if (!accessToken) {
      await getAccessToken();
    }

    const cacheKey = `search-${searchTerm}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      setSearchResults(JSON.parse(cachedData));
    } else {
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=50`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        const songData = data.tracks.items;

        // Cache the song data in localStorage
        localStorage.setItem(cacheKey, JSON.stringify(songData));

        // Handle fetched songs data and update the state with the results
        setSearchResults(songData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch genres on mount
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    if (accessToken === null) {
      getAccessToken();
    } else {
      getGenres();
    }
  }, [accessToken]);
  


  return (
    <SongContext.Provider value={{ searchResults, searchSongs, genres }}>
      {props.children}
    </SongContext.Provider>
  );
};

export { SongContext, SongProvider };
