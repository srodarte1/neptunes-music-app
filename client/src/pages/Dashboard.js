import React, { useContext } from 'react';
import { SongContext } from '../context/SongContext';
import { Box, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const Dashboard = () => {
  const { genres } = useContext(SongContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
        Genres
      </Typography>
      <Box sx={{ width: '80%', height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {genres.map((genre) => (
            <ImageListItem key={genre} sx={{ '&:hover .MuiImageListItemBar-root': { opacity: 1 } }}>
              <img
                src={`https://picsum.photos/200/200?random=${genre}`}
                srcSet={`https://picsum.photos/200/200?random=${genre} 2x`}
                alt={genre}
                loading="lazy"
              />
              <ImageListItemBar title={genre} sx={{ opacity: 0.7 }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Dashboard;
