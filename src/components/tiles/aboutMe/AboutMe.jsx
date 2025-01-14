import React, { useState, useRef } from 'react'
import './aboutMe.css'
import confetti from 'canvas-confetti'

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

    const handleSurprise = () => {
        const confettiConfig = {
            particleCount: 100,
            spread: 70,
            zIndex: 2000,
            disableForReducedMotion: true
        };

        // Left side confetti
        confetti({
            ...confettiConfig,
            origin: { x: 0, y: 0.5 },
            angle: 60
        });

        // Right side confetti
        confetti({
            ...confettiConfig,
            origin: { x: 1, y: 0.5 },
            angle: 120
        });
    };

    return (
        <>
            <div className='about-container' ref={aboutRef} onClick={handleClick}>
                <div className='title'>
                    About Me
                </div>
                <div className='text'>
                    full-stack dev/ UI-UX / tired student
                </div>
            </div>

            {isPopupOpen && (
                <div className={`about-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
                    <div className={`about-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClose}>×</button>
                        <div className='about-popup-title'>About Me</div>
                        <div className='about-popup-content'>
                            <div className='about-popup-left'>
                                Hi there! 👋 My name is Aman Aziz, I'm a caffeine-fueled programmer and a student at VIT Bhopal, on a mission to turn code into magic and designs into experiences that make users go, "Wow, they *get* me!"
                                <br/><br/>
                                I started coding a year ago, and now I'm hooked—like a JavaScript function stuck in an infinite loop. When I'm not wrestling with bugs or designing user-friendly interfaces, you'll find me leveling up in games, getting lost in anime, or sketching questionable masterpieces. Sleep? Overrated—coffee's got my back.
                                <br/><br/>
                                I believe great design starts with seeing the world through the user's eyes (and sometimes their Wi-Fi struggles). Let's create something epic—and maybe grab a coffee while we're at it! ☕🚀
                            </div>
                            <div className='about-popup-right'>
                                <img src="/images/pfp.png" alt="Profile" className="profile-image" />
                                <span className="profile-caption">(yes, I look exactly like this)</span>
                                <button className="surprise-button" onClick={handleSurprise}>
                                    Surprise?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AboutMe