import { createContext, useState, useEffect } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = (props) => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (e, playlistName) => {
        e.preventDefault()
      fetch (`/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlistName),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to create playlist: ${response.statusText}`)
        }
        else{
            response.json().then(data => setPlaylists(current =>[...current, data ]))
        }

    })
}
    
  const getPlaylists = async (userId) => {
    const response = await fetch(`/playlists?user=${userId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to get playlists: ${response.statusText}`);
    }
  
    const data = await response.json();
    setPlaylists(data);
  };
  

  
  
  
  
  
  const getPlaylist = async (id) => {
    const response = await fetch(`/playlists/${id}`);
  
    if (!response.ok) {
      throw new Error(`Failed to get playlist: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  };
  
  
  const updatePlaylist = async (id, name, user) => {
    const response = await fetch(`/playlists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, user }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to update playlist: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  };
  const deletePlaylist = (playlist) => {
    fetch (`/playlists/${playlist.id}`, {
      method: "DELETE",
    })
    .then(data => console.log(data))
    // .then(data => setPlaylists(current => current.filter(p => p.id !== data.id)))
  };
  
  const addSongToPlaylist = async (playlistId, songId) => {
    const response = await fetch(`/playlist_songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlist: playlistId, song: songId }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to add song to playlist: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  };
  
  const removeSongFromPlaylist = async (id) => {
    const response = await fetch(`/playlist_songs/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error(`Failed to remove song from playlist: ${response.statusText}`);
    }
  };
  
  const value = {playlists, addSongToPlaylist, createPlaylist, getPlaylists, getPlaylist, updatePlaylist, deletePlaylist, removeSongFromPlaylist }
  return (
    <PlaylistContext.Provider value={value}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export  { PlaylistContext, PlaylistProvider };
