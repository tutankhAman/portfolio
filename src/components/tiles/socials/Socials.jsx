import React from 'react'

const Socials = () => {
    return (
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
    )
}

export default Socials