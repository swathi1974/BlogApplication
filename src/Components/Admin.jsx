import React, { useState } from 'react';
import { TextField, Button,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import './Admin.css'; 

const Admin = () => {
  const [form, setForm] = useState({
    title: '',
    img: '',
    catg: '',
    description: '',
  });

  const navigate = useNavigate();
  const defaultTheme = createTheme();
  let initialValue;
  if (localStorage.getItem('Blog') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('Blog'));
  }

  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;

    const details = {
      u_id: newUserId,
      ...form,
    };

    const updatedValue = [...value, details];
    setValue(updatedValue);

    await localStorage.setItem('Blog', JSON.stringify(updatedValue));
  };

  return (
    <>
    <div className="admin-container" style={{textAlign:'center',marginLeft:'500px'}}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
      <h1 style={{textAlign:'center'}}>Admin Page</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} encType='multipart/form-data' >
      <TextField
            label="Title"
            fullWidth
            name="title"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          /> <br />
            <TextField
            label="Image"
            fullWidth
            name="img"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          /> <br />
            <TextField
            label="Category"
            fullWidth
            name="catg"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          /> <br />
            <TextField
            label="Description"
            fullWidth
            multiline
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }} 
          /> <br />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Blog
          </Button> <br /> 
        
        {window.location.pathname.startsWith('/admin') && <Sidebar />}
  
          </Box>
          </Container>
    </ThemeProvider>

    </div></>
  );
};

export default Admin;
