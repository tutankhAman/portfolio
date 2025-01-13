import React from 'react'
import Skills from '../tiles/skills/Skills';
import Socials from '../tiles/socials/Socials';
import Intro from '../tiles/intro/Intro';
import Projects from '../tiles/Projects/Projects';
import AboutMe from '../tiles/aboutMe/AboutMe';
import MiniProjects from '../tiles/miniProjects/MiniProjects';


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
                    <AboutMe />
                    <MiniProjects />
                    <div className='pedro'></div>
                </div>
            </div>
        </div>

    )
}

export default Homepage