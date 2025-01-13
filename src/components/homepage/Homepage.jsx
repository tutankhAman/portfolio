import React from 'react'
import Skills from '../tiles/skills/Skills';
import Socials from '../tiles/socials/Socials';
import Intro from '../tiles/intro/Intro';
import Projects from '../tiles/Projects/Projects';


const Homepage = () => {
    

    return (
        <div className='body-container'>
            <div className='main-container'>
                <div className='left-container'>
                    <Skills />
                    <Socials />
                </div>
                <div className='middle-container'>
                    <Intro />
                    <Projects />
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