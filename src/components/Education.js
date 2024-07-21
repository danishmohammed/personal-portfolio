import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  // Trigger when 25%, 40%, and 50% of the screen are visible
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.25 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.40 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.50 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Element name="education" className="p-8 bg-gray-100 lg:px-16 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-center lg:text-left w-full max-w-6xl lg:mt-16 lg:mb-16 text-black">Education & Certifications</h2>
      <div className="relative w-full max-w-6xl lg:pb-16">
        <div className="border-l-2 border-black absolute h-full top-0 left-0 transform"></div>
        
        <motion.div
          ref={ref1}
          variants={itemVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          className="mb-8 flex items-start relative pl-8"
        >
          <div className="w-6 h-6 bg-black rounded-full absolute left-0 transform -translate-x-1/2 -translate-y-2"></div>
          <div className="bg-white border border-black p-6 shadow-md rounded-md w-full ml-8 text-left">
            <h3 className="text-2xl font-semibold">University of Toronto Scarborough</h3>
            <p className="mt-2"><i>Honours Bachelors of Science Degree candidate, 2022-2026</i></p>
            <p className="mt-1">Computer Science Co-op (Specialist in Software Engineering)</p>
            <p className="mt-1"><u>Relevant courses:</u> Data Structures and Algorithms, Software Engineering, Software Tools and Systems Programming, Statistics/Data Science, Computer and Network Security, Intro to Machine Learning</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          variants={itemVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="mb-8 flex items-start relative pl-8"
        >
          <div className="w-6 h-6 bg-black rounded-full absolute left-0 transform -translate-x-1/2 -translate-y-2"></div>
          <div className="bg-white border border-black p-6 shadow-md rounded-md w-full ml-8 text-left">
            <h3 className="text-2xl font-semibold">Machine Learning Specialization</h3>
            <p className="mt-2"><i>Stanford x DeepLearning.AI Coursera specialization</i></p>
            <p className="mt-1">3 Course Series:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Supervised Machine Learning: Regression and Classification</li>
              <li>Advanced Learning Algorithms: Neural Networks and Decision Trees</li>
              <li>Unsupervised Learning, Recommender Systems, Reinforcement Learning</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          variants={itemVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          className="mb-8 flex items-start relative pl-8"
        >
          <div className="w-6 h-6 bg-black rounded-full absolute left-0 transform -translate-x-1/2 -translate-y-2"></div>
          <div className="bg-white border border-black p-6 shadow-md rounded-md w-full ml-8 text-left">
            <h3 className="text-2xl font-semibold">Deep Learning Specialization</h3>
            <p className="mt-2"><i>Stanford x DeepLearning.AI Coursera specialization</i></p>
            <p className="mt-1">5 Course Series:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Neural Networks and Deep Learning</li>
              <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
              <li>Structuring Machine Learning Projects</li>
              <li>Convolutional Neural Networks</li>
              <li>Sequence Models</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Education;
