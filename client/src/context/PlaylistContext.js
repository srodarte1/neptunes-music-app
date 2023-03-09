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
    .then(response => {
        if (response.status === 204) {
            setPlaylists(current => current.filter(p => p.id !== playlist.id))
    }})
    // .then(data => setPlaylists(current => current.filter(p => p.id !== data.id)))
  };
  
 
  
  const removeSongFromPlaylist = async (id) => {
    const response = await fetch(`/playlist_songs/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error(`Failed to remove song from playlist: ${response.statusText}`);
    }
  };
  
  const value = {playlists, createPlaylist, getPlaylists, updatePlaylist, deletePlaylist, removeSongFromPlaylist }
  return (
    <PlaylistContext.Provider value={value}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export  { PlaylistContext, PlaylistProvider };
