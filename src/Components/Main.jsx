import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ViewBlog from './ViewBlog';

import Admin from './Admin';
import User from './User';
import Sidebar from './Sidebar';


export default function Main() {
    const [Blog, setBlog] = useState([]);
  return (
    <div>
 <Router>
      
      <div>
    
        
        <div style={{display:'flex',flexDirection:'column'}}>
          <Sidebar />
          <Routes>
            <Route path="/user" element={<User Blog={Blog} />} />
            <Route path="/viewblog" element={<ViewBlog/>} />
          </Routes>
        </div> 
      </div>
    </Router>

    </div>
  )
}
