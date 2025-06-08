import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import PhotoAlbum from './pages/PhotoAlbum';
import TextMemorial from './pages/TextMemorial';

function App() {
  return (
    <Router basename="/grandma-memorial">
      <div className="min-h-screen bg-gradient-memorial">
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-20"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotoAlbum />} />
            <Route path="/texts" element={<TextMemorial />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App; 