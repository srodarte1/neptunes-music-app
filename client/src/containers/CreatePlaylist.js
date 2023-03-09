import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PlaylistContext } from '../context/PlaylistContext';
import { UserContext } from '../context/UserContext';

const CreatePlaylist = () => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user)
  const [playlistName, setPlaylistName] = useState({
    name: "",
    user_id: user.id
  });
  const { createPlaylist } = useContext(PlaylistContext);

  const handleChange = (e) => {
    setPlaylistName({ ...playlistName, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylist(e, playlistName);
    setPlaylistName({ name: "", user_id: user.id });
    setShowForm(false);
  }

  return (
    <div>
      {showForm ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPlaylistName">
            <Form.Control
              type="text"
              name='name'
              placeholder="Enter playlist name"
              value={playlistName.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create new playlist
          </Button>
        </Form>
      ) : (
          <Button variant="primary" className="btn-lg" onClick={() => setShowForm(true)}>
            + Create Playlist
          </Button>
        )}
    </div>
  );
};

export default CreatePlaylist;
