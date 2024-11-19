import React, { useEffect, useState } from 'react';
import ImgMediaCard from './ImgMediaCard';
import SearchBar from './SearchBar'; 
import TextField from '@mui/material/TextField'; 
import Autocomplete from '@mui/material/Autocomplete';
import './User.css';


const User = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Blog')) || [];
    setData(storedData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryChange = (e, value) => {
    setSelectedCategory(value || '');
  };
  const categories = Array.from(
    new Set(data.map((Blog) => Blog.catg))
  ).filter((catg) => catg);



  return (
    <div>
      <h1>User Page</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="card-container">
        <div className="category-dropdown">
        
          <Autocomplete
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categories}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by Category"
                fullWidth
                sx={{ width: '300px' }}
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
              )}/>
        </div>

        {data
          .filter(
            (Blog) =>
              Blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              (selectedCategory === '' || Blog.category === selectedCategory)
          )
          .map((Blog) => (
            <ImgMediaCard key={Blog.u_id} Blog={Blog} />
          ))}
      </div>
    </div>
  );
};

export default User;
