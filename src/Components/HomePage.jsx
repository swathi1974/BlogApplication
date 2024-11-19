import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import Main from './Main';
import Usermain from './Usermain';
const HomePage = () => {
  const [formData, setFormData] = useState([]);
  const [isCards1Visible, setCards1Visibility] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    setCards1Visibility(false);
  };

  const handleCards1Close = () => {
    setCards1Visibility(false);
  };

  const boxStyles = {
    border: '0px solid #ddd',
    padding: '20px',
    width: '300px',
    height: '369px',
    margin: '20px auto 20px 0',
    backgroundColor:'black'
  };

  const headingStyles = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-12px',
    color: 'white',
    textAlign: 'start',
  };

  const headingStyles1 = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-10px',
    color: 'white',
    textAlign: 'start',
  };

  const headingStyles2 = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-10px',
    color: 'transparent',
    textAlign: 'start',
    WebkitTextStroke: '2px white',
    textStroke: '2px white',
  };

  const paragraphStyles = {
    marginBottom: '10px',
    color: 'white',
  };

  const buttonStyles = {
    padding: '5px 40px ',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    border: '2px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '05px',
    fontSize: '24px',
  
  };

  const handleCards1Click = () => {
    setCards1Visibility(true);
  };

  return (
    <div style={boxStyles}>
      
      <button style={buttonStyles} onClick={handleCards1Click}>
        Explore
      </button>
      
      <Dialog open={isCards1Visible} onClose={handleCards1Close} fullScreen>
        <DialogTitle style={{ backgroundColor: '',backgroundColor: '#992e3d', color: 'white', display: 'flex', alignItems: 'center',height:'20px' }}>
          <Box style={{ flexGrow: 1 }}>
          </Box>
          <Button style={{ borderRadius: '8px', width: '40px', backgroundColor: '#992e3d', color: 'black',marginRight:'-20px', }} onClick={handleCards1Close}>
          <ClearIcon/>
          </Button>
        </DialogTitle>
        <Main/>
      </Dialog>
      
    </div>
  );
};

export default HomePage;
