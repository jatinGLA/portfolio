import React from 'react';
import { ChevronDown, Sword, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge"><Code2 size={16} /> Web3</span>
            <span className="badge"><Sword size={16} /> Full Stack</span>
          </div>
          <h1 className="hero-title">
            JATIN SINGH <span className="text-red">CHAUHAN</span>
          </h1>
          <h2 className="hero-subtitle">Blockchain Forger & Digital Artisan</h2>
          <p className="hero-description">
            Computer Science undergraduate specializing in Blockchain Technology. 
            Forging decentralized systems, smart contracts, and scalable web platforms.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="glow-btn hero-btn-main">View Relics (Projects)</a>
            <a href="https://github.com/jatinGLA" target="_blank" rel="noreferrer" className="glow-btn secondary-btn">GitHub Arsenal</a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
