import React, { useState, useRef } from 'react'
import './projects.css'

const Projects = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const projectsRef = useRef(null);

    const handleClick = () => {
        const rect = projectsRef.current.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        document.documentElement.style.setProperty('--projects-top', `${position.top}px`);
        document.documentElement.style.setProperty('--projects-left', `${position.left}px`);
        document.documentElement.style.setProperty('--projects-width', `${position.width}px`);
        document.documentElement.style.setProperty('--projects-height', `${position.height}px`);
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsPopupOpen(false);
            setIsClosing(false);
        }, 400);
    };

    return (
        <>
            <div className='project-container' ref={projectsRef} onClick={handleClick}>
                <div className='title'>
                    My Projects
                </div>
                <div className='projects-info'>
                    <strong>• Delivio:</strong> Reward based food delivery system with AI food recommendation.
                    <br></br>
                    <br></br>
                    <strong>• Clutter-Clearing-System:</strong> A simple script to segregate files and organize your directories.
                </div>
            </div>

            {isPopupOpen && (
                <div className={`projects-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`projects-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='title'>My Projects</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects