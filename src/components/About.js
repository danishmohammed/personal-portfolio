import React from 'react';
import profilePhoto from '../images/suit.png';
import { Element, Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.20, // Trigger when 20% of the component is visible
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.20, // Trigger when 20% of the component is visible
    triggerOnce: true,
  });

  return (
    <Element name="about" className="p-8 lg:px-16 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:justify-between">
        <motion.div
          ref={textRef}
          className="lg:w-2/3 lg:pr-16 text-left"
          initial={{ opacity: 0, x: -200 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">About Me</h2>
          <p className="mb-8">
            I'm a Computer Science student at UofT currently taking a deep dive into machine learning and full-stack development. I am passionate about leveraging Computer Science for <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-blue-500 hover:underline cursor-pointer">real world applications</ScrollLink> and have acquired many skills along the way. I am proficient in technologies like Python, Java, C, HTML/CSS, JS (MERN Stack), Tensorflow, web scraping, data visualization, and git.
          </p>
          <p className="mb-4">
            When I'm not coding, you can usually find me:
          </p>
          <ul className="list-disc list-inside mb-10">
            <li>Praying at the Mosque</li>
            <li>Spending time with family & friends</li>
            <li>Playing basketball, tennis, swimming, running, or working out</li>
            <li>Watching a TV show or reading a good book</li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-blue-700 text-white px-4 py-2 rounded-full border-2 border-blue-900 hover:bg-blue-900 cursor-pointer button"
            >
              Contact me
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div
          ref={imageRef}
          className="lg:w-1/3 flex justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 200 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <img src={profilePhoto} alt="Danish Mohammed" className="rounded-full border-4 border-blue-700 w-64 lg:w-80" />
        </motion.div>
      </div>
      <style jsx>{`
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

export default About;
