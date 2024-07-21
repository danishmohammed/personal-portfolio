import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu is hidden by default

  const toggleMenu = () => {
    setIsOpen(!isOpen); // If its open close it, and if its closed open it
  };

  return (
    <nav className="bg-black text-white fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-left pl-4">
          <a href="/">Danish Mohammed</a>
        </div>
        <div className="hidden md:flex space-x-12 pr-4">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            Articles
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleMenu}>
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black text-white space-y-4 py-4">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            Articles
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-500 font-sans"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
