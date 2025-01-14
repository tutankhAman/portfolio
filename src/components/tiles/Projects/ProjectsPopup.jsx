import React from 'react'
import './projectsPopup.css'

const ProjectsPopup = () => {
  const projectsinfo = [
    {
      name: 'Delivo',
      githubUrl: 'https://github.com/tutankhAman/delivio',
      image: '/images/projects/delivo.png',
      info: {
        description: 'Delivo is an innovative reward-based food delivery system designed to enhance user experience and satisfaction. It offers incentives based on the number of orders users complete, turning every meal delivery into an opportunity to earn exciting rewards.',
        keyFeatures: [
          'AI Chatbot for Food Recommendations: Powered by intelligent algorithms, the chatbot helps users discover dishes tailored to their preferences.',
          'Comprehensive Product Details: Each item on the platform includes a detailed description and user ratings to aid informed decisions.',
          'Engaging Reward System: Earn rewards as you order, encouraging continued engagement and loyalty.'
        ],
        conclusion: 'Delivo aims to redefine food delivery by blending convenience, personalization, and gamified rewards. With more exciting features in development, Delivo is set to become a go-to platform for food lovers.'
      }
    },
    {
      name: 'Clutter Clearing System',
      githubUrl: 'https://github.com/tutankhAman/clutter-clear-system',
      image: '/images/projects/clutter.png',
      info: {
        description: 'Clear The Clutter is a simple Node.js project designed to organize and clean up a folder by sorting its files into their respective categories. This tool automatically creates folders like Documents, Images, Videos, Audios, and Others and moves the files accordingly.',
        keyFeatures: [
          'Automated Folder Organization: Sorts files based on their extensions.',
          'Predefined Categories: Supports documents, images, videos, audios, and other common file types.',
          'Customizable: Easily extend or modify the categories and file types.',
          'Lightweight and Fast: Processes files in seconds.'
        ]
      }
    }
  ]

  return (
    <div className="projects-grid">
      {projectsinfo.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-content">
            <h2 className="project-title">{project.name}</h2>
            <div className="project-description">
              <p>{project.info.description}</p>
              
              <h3 className="features-title">Key Features</h3>
              <ul className="features-list">
                {project.info.keyFeatures.map((feature, idx) => {
                  const [title, description] = feature.split(': ');
                  return (
                    <li key={idx}>
                      <span className="feature-title">{title}:</span>
                      <span className="feature-description">{description}</span>
                    </li>
                  );
                })}
              </ul>
              
              {project.info.conclusion && (
                <p className="project-conclusion">{project.info.conclusion}</p>
              )}
            </div>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPopup