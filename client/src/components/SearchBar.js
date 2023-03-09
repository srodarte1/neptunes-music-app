import React, { useState, useContext } from "react";
import { SongContext } from "../context/SongContext"
import { PlaylistContext } from "../context/PlaylistContext";


const SearchPage = () => {
  const { searchResults, searchSongs } = useContext(SongContext)
  const { setPlaylists } = useContext(PlaylistContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    searchSongs(searchTerm);
  };

  const handleAddToPlaylist = (song) => {
    console.log("Added to playlist:", song)
    fetch('/playlist_songs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        name: song.name,
        duration_ms: song.duration_ms,
        artist: song.artists.map(a => a.name).join(', '),
    album_name: song.album.name,
    preview_url: song.preview_url,
    image_url: song.album.images[0].url,
    spotify_id: song.id
    })
    

  }).then(response => {
    if (response.status === 201){
      response.json().then(songPlaylist => setPlaylists(currentPlaylists => currentPlaylists.map(p => p.id === songPlaylist.playlist.id ? {...p, songs: [...p.songs, songPlaylist.song]} : p)))
    } else if (response.status === 200){
      alert("song already in playlist")
    }
    else {
      response.json().then(error => alert(error.errors))
    }
  })
  }

  return (
    <div className="song-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-black"> {/* Add btn-black class to change button color */}
          Search
        </button>
      </form>
      <div className="card-columns">
        {searchResults.map((song) => (
          <div key={song.id} className="card">
            {song.album.images && song.album.images.length > 0 && (
              <div className="text-center">
                <img
                  src={song.album.images[0].url}
                  alt={song.name}
                  className="card-img-top img-fluid w-25"
                />
              </div>
            )}
            <div
              className="card-body d-flex flex-column justify-content-center text-center"
              style={{ height: "auto" }}
            >
              <h5 className="card-title">{song.name}</h5>
              {song.artists && (
                <p className="card-text">
                  By {song.artists.map((artist) => artist.name).join(", ")}
                </p>
              )}
              <div className="d-flex justify-content-center">
                <audio src={song.preview_url} controls />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success btn-black mt-2" // Add btn-black class to change button color
                  onClick={() => handleAddToPlaylist(song)}
                >
                  + Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
