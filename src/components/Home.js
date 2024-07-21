import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import backgroundImage from '../images/home-background.jpg';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect
  useEffect(() => { 
    const textArray = ["Hello world, I'm"];
    let timer;
    const handleType = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 100);

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleType, 1000);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <Element
      name="home"
      className="h-screen bg-cover bg-center text-black flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-16">
        <h1 className="text-3xl md:text-5xl mb-4 text-shadow-lg font-mono">
          {displayText}
        </h1>
      </div>
      <h2 className="text-5xl md:text-8xl text-center font-bold mb-4 text-shadow-lg">
        Danish Mohammed
      </h2>
      <p className="text-xl text-center md:text-2xl mb-8 text-shadow-lg">
        I'm a Computer Science student at the University of Toronto
      </p>
      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/danishmohammed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-800 border-2 border-teal-600 rounded-full p-2 icon"
        >
          <FaGithub size="2em" />
        </a>
        <a
          href="https://linkedin.com/in/danish-m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-800 border-2 border-teal-600 rounded-full p-2 icon"
        >
          <FaLinkedin size="2em" />
        </a>
        <a
          href="https://danishmohammed57.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-800 border-2 border-teal-600 rounded-full p-2 icon"
        >
          <FaMedium size="2em" />
        </a>
      </div>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 border-2 border-blue-700 hover:bg-blue-900 button"
      >
        <span>About me</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </ScrollLink>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <style jsx>{`
        .icon {
          transition: transform 0.3s ease-in-out;
        }
        .icon:hover {
          transform: scale(1.2);
        }
        .button {
          transition: transform 0.3s ease-in-out;
        }
        .button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </Element>
  );
};

export default Home;
