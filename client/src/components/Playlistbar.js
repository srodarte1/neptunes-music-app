import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";

function Playlistbar() {

  const { playlists } = useContext(PlaylistContext);
  const [value, setValue] = React.useState(null);

  const filterOptions = (options, { inputValue }) =>
    options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const mappedPlaylists = playlists.map((playlist) => ({
    label: playlist.name,
    value: playlist.id,
  }));

  return (
    <>

    <Autocomplete
      id="playlist-search"
      options={mappedPlaylists}
      filterOptions={filterOptions}
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search playlists" variant="outlined" />
      )}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    </>
  );
}
export default Playlistbar 