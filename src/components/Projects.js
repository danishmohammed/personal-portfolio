import React, { useEffect } from "react";
import { Element } from "react-scroll";
import pic1 from "../images/uoft-logo.png";
import pic2 from "../images/heart-pulse.png";
import pic3 from "../images/tools.png";
import pic4 from "../images/online-shopping.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  useEffect(() => {
    const element = document.getElementById("projects");
    if (window.location.hash === "#projects" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const { ref: project1Ref, inView: project1InView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  const { ref: project2Ref, inView: project2InView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  const { ref: project3Ref, inView: project3InView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  const { ref: project4Ref, inView: project4InView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <Element
      name="projects"
      className="p-8 lg:px-16 min-h-screen flex flex-col items-center pt-32"
      id="projects"
    >
      <div className="w-full max-w-6xl text-left lg:text-left lg:mb-8 mb-4">
        <h2 className="text-4xl font-bold mb-2 text-black text-center lg:text-left">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-700 text-center lg:text-left">
          Hover over any project to view its description and check out its
          implementation!
        </p>
      </div>
      <div className="max-w-6xl w-full grid sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <motion.div
          ref={project1Ref}
          className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-72 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${pic1})`, zIndex: 1 }}
          initial={{ opacity: 0, x: -200 }}
          animate={project1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div className="text-center absolute top-0 left-0 bg-black bg-opacity-70 w-full p-4 text-white text-xl font-extrabold z-10">
            UofT Timetable Visualizer
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black bg-opacity-75 w-full h-full absolute inset-0 rounded-md pt-12 z-0">
            <p className="text-center lg:text-left text-white px-4">
              A web application that displays insights about the busiest (and
              non-busiest) times and days on campus at the University of
              Toronto.
            </p>
            <div className="pt-8 text-center">
              <a
                href="https://ttv.danishmohammed.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-700 text-white font-bold text-lg button">
                  Demo the App
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          ref={project2Ref}
          className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-72 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${pic2})`, zIndex: 1 }}
          initial={{ opacity: 0, x: -200 }}
          animate={project2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <div className="text-center absolute top-0 left-0 bg-black bg-opacity-70 w-full p-4 text-white text-xl font-extrabold z-10">
            ML Heart Disease Prediction
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black bg-opacity-75 w-full h-full absolute inset-0 rounded-md pt-12 z-0">
            <p className="text-center lg:text-left text-white px-4">
              A machine learning analysis that predicts heart disease using
              Logistic Regression, Decision Trees, and Neural Networks.
            </p>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/danishmohammed/ml-cvd-prediction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-700 text-white font-bold text-lg button">
                  View on Colab
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          ref={project3Ref}
          className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-72 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${pic3})`, zIndex: 1 }}
          initial={{ opacity: 0, x: -200 }}
          animate={project3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <div className="text-center absolute top-0 left-0 bg-black bg-opacity-70 w-full p-4 text-white text-xl font-extrabold z-10">
            Quotis App
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black bg-opacity-75 w-full h-full absolute inset-0 rounded-md pt-12 z-0">
            <p className="text-center lg:text-left text-white px-4">
              A React Native mobile application that connects clients to service
              providers for handyman jobs.
            </p>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/UofT-UTSC-CS-sandbox/final-term-project-quotis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-700 text-white font-bold text-lg button">
                  View on Github
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          ref={project4Ref}
          className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div h-72 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${pic4})`, zIndex: 1 }}
          initial={{ opacity: 0, x: -200 }}
          animate={project4InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          <div className="text-center absolute top-0 left-0 bg-black bg-opacity-70 w-full p-4 text-white text-xl font-extrabold z-10">
            MobileMall App
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black bg-opacity-75 w-full h-full absolute inset-0 rounded-md pt-12 z-0">
            <p className="text-center lg:text-left text-white px-4">
              An Android App that digitalizes the mall experience, allowing
              browsing and purchase of products.
            </p>
            <div className="pt-8 text-center">
              <a
                href="https://github.com/tsids/mobile-mall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-700 text-white font-bold text-lg button">
                  View on Github
                </button>
              </a>
            </div>
          </div>
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

export default Projects;
