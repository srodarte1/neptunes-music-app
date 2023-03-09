import React, { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

const EachPlaylist = () => {
  const { playlists } = useContext(PlaylistContext);

  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h3></h3>
          {playlist.songs.map((song) => (
            <div key={song.id}>
              <p>{song.name}</p>
              <p>{song.artist}</p>
              <audio src={song.preview_url} controls />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EachPlaylist;
