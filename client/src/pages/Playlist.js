import React, { useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Button from '@material-ui/core/Button';
import Playlistbar from '../components/Playlistbar'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "16px",
  },
  media: {
    height: 200,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "5em",
    color: "white",
  },
});

const Playlist = () => {
  const classes = useStyles();
  const { playlists } = useContext(PlaylistContext);

  return (
    <div className={classes.root}>
      {playlists.length === 0 ? (
        <div>
          <Typography variant="h6">You don't have any playlists yet :(</Typography>
          <Button variant="contained" color="primary">Create Playlist</Button>
        </div>
      ) : (
        <Grid container spacing={2}>
          {playlists.map((playlist) => (
            <Grid key={playlist.id} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={playlist.image_url}
                    title={playlist.name}
                  >
                    <PlayCircleOutlineIcon className={classes.playButton} />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {playlist.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="secondary">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Playlistbar/>
    </div>
  );
};

export default Playlist;
