import React, { useState, useRef } from 'react'
import './aboutMe.css'

const AboutMe = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const aboutRef = useRef(null);

    const handleClick = () => {
        const rect = aboutRef.current.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        document.documentElement.style.setProperty('--about-top', `${position.top}px`);
        document.documentElement.style.setProperty('--about-left', `${position.left}px`);
        document.documentElement.style.setProperty('--about-width', `${position.width}px`);
        document.documentElement.style.setProperty('--about-height', `${position.height}px`);
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
            <div className='about-container' ref={aboutRef} onClick={handleClick}>
                <div className='title'>
                    About Me
                </div>
                <div className='text'>
                    I am a passionate full stack web developer...
                </div>
            </div>

            {isPopupOpen && (
                <div className={`about-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`about-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='title'>About Me</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutMe