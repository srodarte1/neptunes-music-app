import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PlaylistContext } from '../context/PlaylistContext';

const CreatePlaylist = () => {
  const [showForm, setShowForm] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const { createPlaylist } = useContext(PlaylistContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPlaylist(playlistName);
      setShowForm(false);
      setPlaylistName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showForm ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPlaylistName">
            <Form.Control
              type="text"
              placeholder="Enter playlist name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
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
