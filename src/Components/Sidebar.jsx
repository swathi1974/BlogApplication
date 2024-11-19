import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', Color: 'white',textAlign:'center',marginLeft:'200px'}}>
      <List>
        <ListItem button component={Link} to="/viewblog">
          <ListItemText primary="View Blogs" />
        </ListItem>
      </List>
      
    </div>
  );
};

export default Sidebar;