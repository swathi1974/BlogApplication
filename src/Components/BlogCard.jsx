import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, TextField } from '@mui/material';

const BlogCard = ({ Blog, adminActions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(Blog);

  const handleEdit = () => {
    adminActions.editBlog(Blog.id, editedBlog);
    setIsEditing(false);
  };

  const handleDelete = () => {
    adminActions.deleteBlog(Blog.id);
  };

  return (
    <Card sx={{ maxWidth: 300, height: '100%', margin: 2,p:2  }}>
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              label="Blog Title"
              fullWidth
              value={editedBlog.name}
              onChange={(e) => setEditedBlog({ ...editedBlog, name: e.target.value })}
            />
            <TextField
              label="Image "
              fullWidth
              value={editedBlog.image}
              onChange={(e) => setEditedBlog({ ...editedBlog, image: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              value={editedBlog.description}
              onChange={(e) => setEditedBlog({ ...editedBlog, description: e.target.value })}
            />
          </>
        ) : (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {Blog.name}
            </Typography>
            <img src={Blog.image} alt={Blog.description} style={{ maxWidth: '100%' }} />
            <Typography variant="body2" color="text.secondary">
              {Blog.description}
            </Typography>
          </>
        )}
      </CardContent>
      {adminActions && (
        <CardActions>
          {isEditing ? (
            <Button size="small" onClick={handleEdit}>
              Save
            </Button>
          ) : (
            <>
              <Button size="small" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button size="small" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default BlogCard;