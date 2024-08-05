import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post1 from './pages/Post1';
import Post2 from './pages/Post2';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import myImage from './assets/prat.jpeg'; // Correct, with closing quote

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route path="post1" element={<Post1 />} />
            <Route path="post2" element={<Post2 />} />
          </Route>
          <Route path="/protected" element={<ProtectedRoute component={Contact} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
