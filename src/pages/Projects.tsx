import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  // Örnek projeler
  const projects = [
    {
      title: 'E-Ticaret Uygulaması',
      description: 'React ve Node.js kullanarak oluşturulmuş bir e-ticaret uygulaması.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/kullanici/e-ticaret',
    },
    {
      title: 'Kişisel Blog',
      description: 'Markdown tabanlı bir içerik yönetim sistemi.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
      link: 'https://github.com/kullanici/blog',
    },
    {
      title: 'Gerçek Zamanlı Sohbet Uygulaması',
      description: 'Socket.IO kullanarak gerçek zamanlı bir sohbet uygulaması.',
      technologies: ['React', 'Socket.IO', 'Firebase'],
      link: 'https://github.com/kullanici/sohbet-uygulamasi',
    },
  ];

  return (
    <div>
      <h2>Projelerim</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
