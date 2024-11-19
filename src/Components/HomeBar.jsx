import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setShowSidebar }) => {
  const handleAdminClick = () => {
    setShowSidebar(true);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleAdminClick}>
        <Link to="/admin">Admin</Link>
      </button>
    </div>
  );
};

export default Home;
