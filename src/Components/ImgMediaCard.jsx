import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ImgMediaCard = ({ Blog }) => {
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: 'yellow', boxShadow: '5px 5px 15px black',margin:'20px',marginTop:'5px',display:'flex',flexDirection:'column',alignItems:'left',alignSelf:'center',height:'450px',padding:'10px',marginLeft:'45px'}}>
      <CardMedia
        component="img"
        alt={Blog.title}
        height="150"
        image={Blog.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {Blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Blog.description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Category :{Blog.catg}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImgMediaCard;