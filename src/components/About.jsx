import React from 'react';
import { Scroll } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title"><Scroll className="title-icon" /> The Lore</h2>
        <div className="about-content">
          <div className="about-text-box card">
            <p>
              I am a Computer Science undergraduate specializing in Blockchain Technology with hands-on experience in full stack development, blockchain applications, database integration, and scalable web platforms.
            </p>
            <p>
              Skilled in Java, JavaScript, SQL, Supabase, frontend and backend development, with practical exposure to smart contracts and decentralized systems. I bring strong problem-solving, communication, and team collaboration abilities developed through leadership roles, hackathons, and startup projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
