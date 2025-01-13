import React, { useState, useRef } from 'react'
import './miniProjects.css'

const MiniProjects = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const miniProjectsRef = useRef(null);

    const handleClick = () => {
        const rect = miniProjectsRef.current.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        document.documentElement.style.setProperty('--mini-projects-top', `${position.top}px`);
        document.documentElement.style.setProperty('--mini-projects-left', `${position.left}px`);
        document.documentElement.style.setProperty('--mini-projects-width', `${position.width}px`);
        document.documentElement.style.setProperty('--mini-projects-height', `${position.height}px`);
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
            <div className='miniProjects-container' ref={miniProjectsRef} onClick={handleClick}>
                <div className='title'>
                    Mini Projects
                </div>
            </div>

            {isPopupOpen && (
                <div className={`mini-projects-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`mini-projects-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='title'>Mini Projects</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MiniProjects