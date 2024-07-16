import React from 'react';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" className="p-8 text-center min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold">Hi, I'm Danish Mohammed</h1>
      <p className="mt-4">I'm a Computer Science student at the University of Toronto.</p>
    </Element>
  );
}

export default Home;
