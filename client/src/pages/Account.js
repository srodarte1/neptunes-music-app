import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  TextField,
  Typography,
  Input,
  Snackbar
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

function Account() {
  const { user, handleDelete, handleUpdateUser } = useContext(UserContext);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: user?.password || '',
    avatar: user?.avatar || null
  })
  const [isEditable, setIsEditable] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleUpdateClick = () => {
    if (isEditable) {
      handleUpdateUser(updatedUser);
      setIsEditable(false);
      setIsSnackbarOpen(true);
    } else {
      setIsEditable(true);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmationCancel = () => {
    setIsDeleteConfirmationVisible(false);
  };

  const handleDeleteConfirmationConfirm = (e) => {
    e.preventDefault();
    handleDelete(e);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setUpdatedUser((prevState) => ({
      ...prevState,
      avatar: file
    }));
    setAvatarPreviewUrl(URL.createObjectURL(file));
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  }
  if (!user) return <h1>...loading</h1>

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardHeader
            title="Account Overview"
            avatar={<Avatar src={avatarPreviewUrl || user?.avatar} />}
            action={
              <>
                <IconButton onClick={handleUpdateClick}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={handleDeleteClick}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          />
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Name
            </Typography>
            <TextField
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
            <Typography variant="subtitle1" gutterBottom>
              Email
            </Typography>
            <TextField
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
            <Typography variant="subtitle1" gutterBottom>
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              value={updatedUser.password}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
            <Typography variant="subtitle1" gutterBottom>
              Upload/Update profile image
            </Typography>
           

            <input type="file" accept="image/*" onChange={handleAvatarChange} />
            {avatarPreviewUrl && (
        <img src={avatarPreviewUrl} alt="Profile avatar preview" style={{ width: 250, height: 250, objectFit: 'cover' }} />

      )}
            <Button variant="contained" style={{ backgroundColor: 'black' }} onClick={handleUpdateClick}>
              Update Info
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {isDeleteConfirmationVisible && (
        <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Are you sure you want to delete your account?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'black', marginRight: '0.5rem' }} onClick={handleDeleteConfirmationConfirm}>
              Yes
            </Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirmationCancel}>
              No
            </Button>
          </div>
        </div>
      )}
    </Grid>
  );
}

export default Account;
