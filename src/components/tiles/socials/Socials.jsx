import React, { useState, useRef } from 'react'
import './socials.css'

const Socials = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const socialsRef = useRef(null);

    const handleClick = () => {
        const rect = socialsRef.current.getBoundingClientRect();
        const position = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        document.documentElement.style.setProperty('--socials-top', `${position.top}px`);
        document.documentElement.style.setProperty('--socials-left', `${position.left}px`);
        document.documentElement.style.setProperty('--socials-width', `${position.width}px`);
        document.documentElement.style.setProperty('--socials-height', `${position.height}px`);
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
            <div className='socials' ref={socialsRef} onClick={handleClick}>
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

            {isPopupOpen && (
                <div className={`socials-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`socials-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='socials-popup-title'>Socials</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Socials