import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Blockchain Technology)',
      institution: 'GLA University, Mathura, UP',
      duration: 'Aug 2023 – Present'
    },
    {
      degree: 'Intermediate (XII) - Science Stream',
      institution: 'Romex International School, Mathura, UP',
      duration: '2023'
    }
  ];

  const achievements = [
    'Participated in multiple hackathons including HackData (Shiv Nadar University), Hack&Viz (GLA University), and Galgotias Hackathon.',
    'Completed a bootcamp on Mastering Generative AI and gained exposure to AI-powered application development.',
    'Coordinated university-level technical and cultural events including Srijan, Spandan, and Parichay.'
  ];

  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="edu-achieve-grid">
          
          <div className="education-col">
            <h2 className="section-title" style={{textAlign: 'left', left: '0', transform: 'none'}}><BookOpen className="title-icon" /> The Lore</h2>
            <div className="edu-list">
              {education.map((edu, index) => (
                <div className="edu-card card" key={index}>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-col">
            <h2 className="section-title" style={{textAlign: 'left', left: '0', transform: 'none'}}><Trophy className="title-icon" /> Glories</h2>
            <div className="achievements-card card">
              <ul className="achievements-list">
                {achievements.map((achieve, i) => (
                  <li key={i}>{achieve}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
