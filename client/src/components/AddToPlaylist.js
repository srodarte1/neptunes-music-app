const AddToPlaylist = ({ playlist }) => {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {playlist.name}
        </button>
        </div>

    );
  };
  
  export default AddToPlaylist;
  