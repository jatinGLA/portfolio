import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h3 className="footer-title">JATIN SINGH CHAUHAN</h3>
          <p className="footer-motto">Forging the future of decentralized systems.</p>
          
          <div className="footer-socials">
            <a href="mailto:singhjatin40615@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/jatin-chauhan-a5b934298" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/jatinGLA" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jatin Singh Chauhan. Crafted with Code & Steel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
