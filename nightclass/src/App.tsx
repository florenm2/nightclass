import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teach from './pages/Teach';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div>
        <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-left">
            <Link to="/" className="logo">Nightclass</Link>
          </div>
          <ul className="nav-right">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/teach">Teach</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <button className="sign-up-button">Sign Up</button>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teach" element={<Teach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;