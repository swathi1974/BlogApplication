import React, { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material'


export default function Admin() {
  const [form, setForm] = useState([]);


  let initialValue;
  if (localStorage.getItem("Blog") === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem("Blog"));
  }
  const [value, setValue] = useState(initialValue);




  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;

    console.log(newUserId, 'newUserId');

    const details = {
      u_id: newUserId,
      ...form
    };
    const updatedValue = [...value, details];
    setValue(updatedValue);
    await  localStorage.setItem("Blog", JSON.stringify(updatedValue));
 
  };

  console.log(form, 90);


  return (
    <div>
  
    </div>
  )
}
