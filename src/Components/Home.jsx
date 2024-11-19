import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
        <h1 style={{color:'yellow',fontFamily:'cursive',fontSize:'80px'}}>BLOG-SYSTEM</h1>
      <h2>Welcome to BLOG APP</h2>
      <div className="button-container">
        <Button component={Link} to="/admin" variant="contained" color='primary'>
          Admin
        </Button>
        <Button component={Link} to="/user" variant="contained" color="secondary">
          User
        </Button>
      </div>
    </div>
  );
};

export default Home;
