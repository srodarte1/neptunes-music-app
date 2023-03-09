import React, { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

const EachPlaylist = () => {
    const { playlists } = useContext(PlaylistContext);
    console.log(playlists)
  return (
    <div>EachPlaylist</div>
  )
}

export default EachPlaylist