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



  type="button"
                  className="btn btn-success btn-black mt-2" // Add btn-black class to change button color
                  onClick={() => handleAddToPlaylist(song)}

                  const { setPlaylists } = useContext(PlaylistContext);