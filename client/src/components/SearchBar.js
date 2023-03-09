import React, { useState, useContext } from "react";
import { SongContext } from "../context/SongContext";
import AddToPlaylist from '../components/AddToPlaylist';
import { PlaylistContext } from "../context/PlaylistContext";

const SearchPage = () => {
  const { searchResults, searchSongs } = useContext(SongContext);
  const { playlists } = useContext(PlaylistContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPlaylists, setShowPlaylists] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    searchSongs(searchTerm);
  };

  const handleAddToPlaylist = () => {
    setShowPlaylists(true);
  };

  const handlePlaylistClose = () => {
    setShowPlaylists(false);
  };
  
  const mappedPlaylists = playlists && playlists.map((playlist) => (
    <div>
      <AddToPlaylist playlists={playlists} key={playlist.id} className="parent-container" />
    </div>
  ));
  

  return (
    <div className="song-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-black">
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
                  className="btn btn-success btn-black mt-2"
                  onClick={handleAddToPlaylist}
                >
                  + Playlist
                </button>
              </div>
              {showPlaylists && (
                <div className="d-flex justify-content-center">
                  <div className="bg-light rounded p-3">
                    <button
                      type="button"
                      className="close"
                      onClick={handlePlaylistClose}
                    >
                      <span>&times;</span>
                    </button>
                    {mappedPlaylists}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
