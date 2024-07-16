import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name="projects" className="p-8 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Productivity App</h3>
          <p className="mt-2">Description of the Productivity App.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Linux System Monitoring Tool</h3>
          <p className="mt-2">Description of the Linux System Monitoring Tool.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">NLP Recognition</h3>
          <p className="mt-2">Description of the NLP Recognition project.</p>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
