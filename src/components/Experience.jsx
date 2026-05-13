import React from 'react';
import { Crown } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Sales Development Representative (SDR)',
      company: 'Multiforgex Solutions Pvt. Ltd.',
      duration: 'Aug 2025 – Present',
      location: 'Remote',
      points: [
        'Managed international client communication and coordinated project-related discussions with technical teams.',
        'Prepared business proposals, follow-ups, and handled professional stakeholder communication.'
      ]
    },
    {
      role: 'President, Student Affairs Council (SAC)',
      company: 'GLA University, Mathura',
      duration: 'Oct 2025 – Present',
      location: 'Mathura',
      points: [
        'Led and represented 25,000+ students while coordinating with university administration and external stakeholders.',
        'Handled large-scale communication, coordination, and operational responsibilities across departments.'
      ]
    },
    {
      role: 'Head Coordinator, Dev!@thon',
      company: 'GLA’s First National Hackathon',
      duration: 'Oct 2025',
      location: 'Mathura',
      points: [
        'Executed a national-level hackathon with 600+ participants, mentors, judges, and sponsors.',
        'Managed team coordination, event execution, logistics, and stakeholder communication.'
      ]
    }
  ];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title"><Crown className="title-icon" /> The Saga</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3 className="role-title">{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company} <span className="location">({exp.location})</span></h4>
                <ul className="exp-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
