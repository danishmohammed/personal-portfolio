import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10">
      <ul className="flex justify-around">
        <li><Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">Home</Link></li>
        <li><Link to="experience" smooth={true} duration={500} className="hover:underline cursor-pointer">Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer">Projects</Link></li>
        <li><Link to="articles" smooth={true} duration={500} className="hover:underline cursor-pointer">Articles</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
