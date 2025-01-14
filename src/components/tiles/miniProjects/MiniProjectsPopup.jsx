import React from 'react'
import './miniProjectsPopup.css'

const MiniProjectsPopup = () => {
    const miniprojectsinfo = [
        {
          name: 'Rock Papers Scissors',
          githubUrl: 'https://github.com/tutankhAman/rock-paper-scissors',
          image: '/images/projects/rps.jpg',
          info: {
            description: 'A simple rock paper scissors game. This was my first project. Got a lot to learn about loops in javascript',
            keyFeatures: [
              'Player vs Computer gameplay',
              'Score tracking system',
              'Interactive UI with animations',
              'Best of 5 rounds gameplay'
            ]
          }
        },
        {
          name: 'Etch-a-Sketch',
          githubUrl: 'https://github.com/tutankhAman/Etch-a-Sketch',
          image: '/images/projects/eas.jpg',
          info: {
            description: 'A fun canvas to pass time with. It has multiple options for resolution of grid. It changes color of the div you hover it on.',
            keyFeatures: [
              'Adjustable grid resolution',
              'Hover-based drawing mechanism',
              'Color changing options',
              'Clear canvas functionality'
            ]
          }
        }
    ]
    
    return (
        <div className="mini-projects-grid">
            {miniprojectsinfo.map((project, index) => (
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
                                {project.info.keyFeatures.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-description">{feature}</span>
                                    </li>
                                ))}
                            </ul>
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

export default MiniProjectsPopup