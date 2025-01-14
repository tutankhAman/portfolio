import React, { useState } from 'react'
import Skills from '../tiles/skills/Skills';
import Socials from '../tiles/socials/Socials';
import Intro from '../tiles/intro/Intro';
import Projects from '../tiles/Projects/Projects';
import AboutMe from '../tiles/aboutMe/AboutMe';
import MiniProjects from '../tiles/miniProjects/MiniProjects';
import Pokemon from '../pokemon/Pokemon';

const Homepage = () => {
    const [showPokemon, setShowPokemon] = useState(false);

    const togglePokemon = () => {
        setShowPokemon(!showPokemon);
    };

    return (
        <div className='body-container'>
            {showPokemon ? (
                <div className='pokemon-container'>
                    <button className='close-pokemon' onClick={togglePokemon}>×</button>
                    <Pokemon />
                </div>
            ) : (
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
                        <div className='pedro' onClick={togglePokemon}></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Homepage