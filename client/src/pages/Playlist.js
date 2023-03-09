import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import EachPlaylist from '../components/EachPlaylist'


import { PlaylistContext } from '../context/PlaylistContext';
import CreatePlaylist from '../containers/CreatePlaylist';

function Playlist() {
  const { playlists, deletePlaylist } = useContext(PlaylistContext);
  const [value, setValue] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="d-flex justify-content-center">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-4">My Playlists:</h1>
          <CreatePlaylist />
        </div>
        {!modalIsOpen && (
          <div className="row">
            <div className="col-8">
              <ul className="list-group">
                {playlists.map((playlist, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${value === index ? 'active' : ''}`}
                    onClick={() => setValue(index)}
                  >
                    <div className="d-flex justify-content-between">
                      <div onClick={() => setModalIsOpen(true)}>{playlist.name}</div>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => deletePlaylist(playlist)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              
            </div>
          </div>
        )}
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          {<EachPlaylist/>}
          <h2>{playlists[value].name}</h2>
          <p>{playlists[value].description}</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    </div>
  );
}

export default Playlist;
