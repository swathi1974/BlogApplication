import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import SingleView from './singleView' 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: '1px',
  },
}));

const ViewBlog = () => {
  const [data, setData] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({});

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Blog")) || []);
  }, []);
  const handleSingleView = (id) => {
    console.log(id,9);
    setOpen4(true)
    setSelectedUser(id)
  }

  const handleDelete = (id) => {
    setOpen2(true);
    setDeleteItem(id);
  };

  const confirmDelete = () => {
    const updatedData = data.filter(item => item.u_id !== deleteItem);
    localStorage.setItem("Blog", JSON.stringify(updatedData));
    setData(updatedData);
    setOpen2(false);
  };

  const handleUpdate = (id) => {
    const selectedBlog = data.find(item => item.u_id === id);
    setUpdatedBlog(selectedBlog);
    setOpen3(true);
    setSelectedUser(id);
  };

  const confirmUpdate = () => {
    const updatedData = data.map(item => {
      if (item.u_id === selectedUser) {
        return {
          ...item,
          ...updatedBlog,
        };
      }
      return item;
    });

    localStorage.setItem("Blog", JSON.stringify(updatedData));
    setData(updatedData);
    setOpen3(false);
    setUpdatedBlog({});
  };

  const handleClose = () => {
    setOpen2(false);
    setOpen3(false);
    setUpdatedBlog({});
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Slno</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <img src={row.img} alt="Blog" style={{ width: '300px', height: 'auto' }} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.title}</StyledTableCell>
                <StyledTableCell align="center" multiline style={{maxLines:'3',width:'500px'}}>{row.description}</StyledTableCell>
                <StyledTableCell align="right"><Button variant='outlined' color="secondary" onClick={()=>handleSingleView(row.u_id)}>View</Button></StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color="primary" onClick={() => handleUpdate(row.u_id)}>Update</Button>
                  <Button variant='contained' color="error" onClick={() => handleDelete(row.u_id)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this Blog?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open3} onClose={handleClose}>
        <DialogTitle>Update Blog</DialogTitle>
        <DialogContent>
          <TextField label="Image" fullWidth value={updatedBlog.img || ''} onChange={(e) => setUpdatedBlog({ ...updatedBlog, img: e.target.value })} />
          <TextField label="Blog Title" fullWidth value={updatedBlog.title || ''} onChange={(e) => setUpdatedBlog({ ...updatedBlog, title: e.target.value })} />
          <TextField label="Description" fullWidth multiline value={updatedBlog.description || ''} onChange={(e) => setUpdatedBlog({ ...updatedBlog, description: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={open4}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <SingleView sx={style} selectedUser={selectedUser}/>
      </Modal>
    </div>
  );
};

export default ViewBlog;