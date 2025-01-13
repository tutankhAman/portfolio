import React from 'react'
import './skillsCarousel.css'



const Skills = () => {
    const logos = [
        'bootstrap.png', 'cpp.png', 'python.png', 'html.png', 'css.png',
        'js.png', 'react.png', 'express.png', 'nodejs.png', 'git.png', 'github.png'
    ];
    return (
        
        <div className='skills'>
            <div className='title'>Skills</div>
            <div className="skills-carousel">
                <div className="skills-slide">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={`/images/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="skill-logo"
                        />
                    ))}
                </div>
                <div className="skills-slide">
                    {logos.map((logo, index) => (
                        <img
                            key={index + logos.length}
                            src={`/images/logos/${logo}`}
                            alt={logo.replace('.png', '')}
                            className="skill-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills