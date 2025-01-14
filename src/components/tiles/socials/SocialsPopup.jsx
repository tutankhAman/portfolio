import React from 'react'
import './socialsPopup.css'

const SocialsPopup = () => {
    const socialsData = [
        { 
            name: 'GitHub', 
            username: 'tutankhAman', 
            icon: '/images/logos/github.png', 
            link: 'https://github.com/tutankhAman',
            color: '#2b3137'
        },
        { 
            name: 'LinkedIn', 
            username: 'Aman Aziz', 
            icon: '/images/logos/linkedin.png', 
            link: 'https://www.linkedin.com/in/aman-aziz-23b416261/',
            color: '#0A66C2'
        },
        { 
            name: 'Discord', 
            username: 'dxrken', 
            icon: '/images/logos/discord.png',
            color: '#5865F2'
        },
        { 
            name: 'Gmail', 
            username: 'amanaziz2020@gmail.com', 
            icon: '/images/logos/gmail.png', 
            link: 'mailto:amanaziz2020@gmail.com',
            color: '#EA4335'
        }
    ];

    return (
        <div className='social-links-container'>
            {socialsData.map((social, index) => (
                <a 
                    key={index} 
                    className='social-item'
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--hover-color': social.color }}
                >
                    <div className='social-content'>
                        <div className='social-icon-wrapper'>
                            <img src={social.icon} alt={social.name} className='social-icon'/>
                        </div>
                        <div className='social-info'>
                            <span className='social-platform'>{social.name}</span>
                            <span className='social-username'>{social.username}</span>
                        </div>
                    </div>
                    {social.link && <span className='visit-text'>Visit →</span>}
                </a>
            ))}
        </div>
    )
}

export default SocialsPopup