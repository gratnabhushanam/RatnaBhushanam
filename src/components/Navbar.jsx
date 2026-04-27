import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="nav-brand">
          <span>✨</span>G.Ratna <span>Bhushanam</span>
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="/#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="/#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
