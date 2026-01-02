import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

// Placeholder components for other pages
const About = () => <div className="page-content">About Page</div>;
const Rooms = () => <div className="page-content">Rooms Page</div>;
const Me = () => <div className="page-content">Profile Page</div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;