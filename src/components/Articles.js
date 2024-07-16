import React from 'react';
import { Element } from 'react-scroll';

const Articles = () => {
  return (
    <Element name="articles" className="p-8 bg-gray-100 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="mt-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">The Art of Connection</h3>
          <p className="mt-2">In the ever-evolving world...</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Beyond the Obstacle</h3>
          <p className="mt-2">Challenges in business...</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Growth Unlocked</h3>
          <p className="mt-2">Every business has...</p>
        </div>
      </div>
    </Element>
  );
}

export default Articles;
