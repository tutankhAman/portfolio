import React, { useState, useRef } from 'react'
import './skillsCarousel.css'
import './skills.css'

const Skills = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const skillsRef = useRef(null);
    const logos = [
        'bootstrap.png', 'cpp.png', 'python.png', 'html.png', 'css.png',
        'js.png', 'react.png', 'express.png', 'nodejs.png', 'git.png', 'github.png'
    ];

    const handleClick = () => {
        const rect = skillsRef.current.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        document.documentElement.style.setProperty('--skills-top', `${position.top}px`);
        document.documentElement.style.setProperty('--skills-left', `${position.left}px`);
        document.documentElement.style.setProperty('--skills-width', `${position.width}px`);
        document.documentElement.style.setProperty('--skills-height', `${position.height}px`);
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsPopupOpen(false);
            setIsClosing(false);
        }, 400); // Match this with animation duration
    };

    return (
        <>
            <div className='skills' ref={skillsRef} onClick={handleClick}>
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

            {isPopupOpen && (
                <div className={`skills-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`skills-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='title'>Skills</div>
                        {"hey"}
                    </div>
                </div>
            )}
        </>
    )
}

export default Skills