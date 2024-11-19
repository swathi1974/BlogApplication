import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import User from './Components/User';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ViewBlog from './Components/ViewBlog';
import Home from './Components/Home';

const App = () => {
  const [Blog, setBlog] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home setShowSidebar={setShowSidebar} />}
        />
        <Route
          path="/admin/*"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <Admin setBlog={setBlog} />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <User Blog={Blog} />
            </>
          }
        />
        <Route
          path="/viewblog"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <ViewBlog setBlog={setBlog} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
