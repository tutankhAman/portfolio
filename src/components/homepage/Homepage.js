import React from 'react'
import './skillsCarousel.css'

const Homepage = () => {
    const logos = [
        'bootstrap.png', 'cpp.png', 'python.png', 'html.png', 'css.png',
        'js.png', 'react.png', 'express.png', 'nodejs.png', 'git.png', 'github.png'
    ];

    return (
        <div className='body-container'>
            <div className='main-container'>
                <div className='left-container'>
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
                    <div className='socials'>
                        <div className='title'>Socials</div>
                        <div className='social-links'>
                            <a href="https://github.com/tutankhAman" target="_blank" rel="noopener noreferrer">
                                <img className='social-logo github' src="/images/logos/github.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/aman-aziz-23b416261/" target="_blank" rel="noopener noreferrer">
                                <img className='social-logo linkedin' src="/images/logos/linkedin.png" alt="LinkedIn" />
                            </a>
                            <img className='social-logo discord' src="/images/logos/discord.png" alt="Discord" />
                            <img className='social-logo gmail' src="/images/logos/gmail.png" alt="Gmail" />
                        </div>
                    </div>
                </div>
                <div className='middle-container'>
                    <div className='intro'></div>
                    <div className='my-projects'></div>
                </div>
                <div className='right-container'>
                    <div className='about'></div>
                    <div className='mini-projects'></div>
                    <div className='pedro'></div>
                </div>
            </div>
        </div>

    )
}

export default Homepage