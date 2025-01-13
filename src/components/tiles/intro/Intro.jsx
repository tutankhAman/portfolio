import React, { useState, useEffect } from 'react';

const languages = [
  'Hello', // English
  'Hola', // Spanish
  'Bonjour', // French
  'Hallo', // German
  'Ciao', // Italian
  'Olá', // Portuguese
  '你好', // Chinese (Mandarin)
  'こんにちは', // Japanese
  'Привет', // Russian
  'مرحبا', // Arabic
  'नमस्ते' // Hindi
];

const Intro = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 800);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='intro-container'>
      <div className='hello'>
        {languages[currentLanguageIndex]}
      </div>
      <div className='subtitle'>I am</div>
      <div className='name'>Aman</div>
    </div>
  );
};

export default Intro;
