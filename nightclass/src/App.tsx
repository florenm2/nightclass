import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teach from './pages/Teach';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <Link to="#" onClick={() => openModal('Log In')} className="nav-link">Log In</Link>
            </li>
            <li>
              <button onClick={() => openModal('Sign Up')} className="sign-up-button">Sign Up</button>
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

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalTitle}
          subtitle="Subtitle placeholder"
        />
      </div>
    </Router>
  );
};

export default App;