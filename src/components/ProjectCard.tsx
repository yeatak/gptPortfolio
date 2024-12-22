import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Teknolojiler:</strong> {technologies.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>Projeyi Gör</a>
    </div>
  );
};

// Stil objeleri
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default ProjectCard;
