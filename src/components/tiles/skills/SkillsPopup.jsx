import React from 'react'
import './skillsPopup.css'

const SkillsPopup = () => {
    const skillsData = [
        { name: 'Python', progress: 50, icon: '/images/logos/python.png', color: '#3776AB' },
        { name: 'C++', progress: 30, icon: '/images/logos/cpp.png', color: '#00599C' },
        { name: 'HTML', progress: 100, icon: '/images/logos/html.png', color: '#E34F26' },
        { name: 'CSS', progress: 60, icon: '/images/logos/css.png', color: '#1572B6' },
        { name: 'Javascript', progress: 80, icon: '/images/logos/js.png', color: '#F7DF1E' },
        { name: 'Node JS', progress: 90, icon: '/images/logos/nodejs.png', color: '#339933' },
        { name: 'Express js', progress: 80, icon: '/images/logos/express.png', color: '#000000' },
        { name: 'React js', progress: 40, icon: '/images/logos/react.png', color: '#61DAFB' },
        { name: 'Git', progress: 60, icon: '/images/logos/git.png', color: '#F05032' },
        { name: 'GitHub', progress: 80, icon: '/images/logos/github.png', color: '#ffffff' },
        { name: 'Bootstrap', progress: 80, icon: '/images/logos/bootstrap.png', color: '#7952B3' },
        { name: 'Japanese language', progress: 20, subtitle: '(N5 level)', icon: '/images/logos/japanese.webp', color: '#BC002D' }
    ];

    return (
        <div className="skills-progress-container">
            {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-header">
                        <div className="skill-info">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name">
                                {skill.name}
                                {skill.subtitle && <span className="skill-subtitle">{skill.subtitle}</span>}
                            </span>
                        </div>
                        <span className="skill-percentage">{skill.progress}%</span>
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ 
                                width: `${skill.progress}%`,
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsPopup