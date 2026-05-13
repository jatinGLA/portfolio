import React from 'react';
import { ShieldAlert } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages of Power',
      skills: ['Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Websmithing',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design', 'React']
    },
    {
      title: 'Backend & Vaults',
      skills: ['JDBC', 'MySQL', 'Supabase', 'REST APIs']
    },
    {
      title: 'Web3 & Blockchain',
      skills: ['Smart Contracts', 'Ethereum', 'Sepolia Testnet', 'MetaMask Integration']
    },
    {
      title: 'Tools of the Trade',
      skills: ['Git', 'GitHub', 'Object-Oriented Programming (OOPs)', 'Debugging']
    }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title"><ShieldAlert className="title-icon" /> The Arsenal</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category card" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
