import React from 'react';
import { Archive, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Prediction Market',
      type: 'Blockchain Decentralized Platform',
      links: { github: 'https://github.com/jatinGLA/prediction-market' },
      points: [
        'Developed a decentralized blockchain-based prediction market platform using Ethereum smart contracts.',
        'Implemented MetaMask wallet connectivity and deployed smart contracts on Sepolia Testnet.',
        'Focused on decentralized transactions, blockchain event handling, and secure user interactions.'
      ]
    },
    {
      title: 'ChalChitra',
      type: 'Movie Discovery Platform',
      links: { github: 'https://github.com/jatinGLA/ChalChitra' },
      points: [
        'Built a responsive movie discovery platform with dynamic content handling and modern UI design.',
        'Integrated Supabase for backend services, authentication, and scalable database management.',
        'Implemented responsive frontend components using HTML, CSS, JavaScript, and Bootstrap.'
      ]
    },
    {
      title: 'GhumiGhumi',
      type: 'Travel Startup Platform',
      links: { live: 'https://ghumighumi.co.in' },
      points: [
        'Developed and managing a travel startup platform focused on travel discovery and trip planning.',
        'Integrated Supabase for authentication, backend services, and real-time database operations.',
        'Worked on frontend architecture, responsive UI development, and scalable application workflows.'
      ]
    },
    {
      title: 'HEMOCHAIN',
      type: 'Blockchain Based Healthcare Platform',
      links: {},
      points: [
        'Developed a blockchain-powered healthcare platform for secure medical data management.',
        'Focused on decentralized healthcare record handling, data integrity, and secure storage concepts.',
        'Worked on integrating blockchain workflows with scalable application architecture.'
      ]
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title"><Archive className="title-icon" /> The Relics</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-type">{project.type}</p>
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
