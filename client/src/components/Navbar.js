import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react'
import {UserContext} from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar() {
  const navigate = useNavigate()
  const { user, handleLogout} = useContext(UserContext)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{ mr: 2, ...(open && { display: 'none' }) }}
    >
         <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Spotify Bold', fontSize: '1.5rem', color: 'white' }}>
        NEPTUNES
      </Typography>
      <Box sx={{ marginLeft: 'auto' }}>
      <Avatar alt={user.name} src={user.avatarUrl} />
      </Box>
    </Toolbar>
</AppBar>

<Drawer
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: 'black',
      color: 'white'
    },
  }}
  variant="persistent"
  anchor="left"
  open={open}
>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color: "white"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  {['Dashboard', 'Search', 'Playlists'].map((text, index) => (
    <ListItem
      key={text}
      disablePadding
      button
      onClick={() => {
        if (text === 'Dashboard') {
          navigate('/dashboard');
        } else if (text === 'Search') {
          navigate('/search');
        } else if (text === 'Playlists') {
          navigate('/playlists');
        }
        handleDrawerClose(); // close the drawer after a list item is clicked
      }}
    >
      <ListItemButton>
        <ListItemIcon style={{ color: 'white' }}>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

        <Divider sx={{ backgroundColor: 'white' }} />

        <List>
      {['Friends', 'Music Player', 'Account'].map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          button
          onClick={() => {
            if (text === 'Friends') {
              navigate('/friends');
            } else if (text === 'Music Player') {
              navigate('/music-player');
            } else if (text === 'Account') {
              navigate('/account');
            }
            handleDrawerClose()
          }}
        >
              <ListItemButton>
                <ListItemIcon style={{color: "white"}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            
          ))}
        </List>
        <button onClick={handleLogout}>Logout</button>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
        
      </Main>
    </Box>
  );
}