import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// All the data for the articles
const articlesData = [
  {
    title: "How to Get Started in Machine Learning/AI",
    description:
      "Get the roadmap on how to get started in this rewarding yet daunting field.",
    link: "https://medium.com",
    tags: ["ML", "AI", "Beginner"],
  },
  {
    title: "How does Siri work?",
    description:
      "Learn about the technology that powers Apple's renowned voice assistant.",
    link: "https://medium.com",
    tags: ["NLP", "AI", "Technology"],
  },
  {
    title: "How to get into UofT Computer Science",
    description:
      "Learn about how to get into UofT CS using my case as an example.",
    link: "https://medium.com",
    tags: ["UofT", "Computer Science"],
  },
  {
    title: "How I Actually Started Getting Work Done",
    description:
      "Discover the simple yet effective method I used to start getting stuff done.",
    link: "https://medium.com",
    tags: ["Productivity", "Focus"],
  },
  {
    title: "Powerful Lessons from the Life of Malcolm X",
    description:
      "What can we learn from Malcolm X's life to improve ourselves and the world?",
    link: "https://medium.com/studentsxstudents/powerful-lessons-from-the-autobiography-of-malcolm-x-e0c0971c1bdc",
    tags: ["Education", "Social Change", "Open-Mindedness"],
  },
  {
    title: "I Made a Focus and Productivity App",
    description:
      "Check out the Java app I developed that helps users manage tasks and boost their efficiency.",
    link: "https://medium.com/@danishmohammed57/i-made-a-focus-productivity-app-b49195430417",
    tags: ["Java", "Productivity", "App"],
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-200 rounded-full z-10"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaArrowRight size={18} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-200 rounded-full z-10"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <FaArrowLeft size={18} />
    </div>
  );
};

const Articles = () => {
  useEffect(() => {
    const element = document.getElementById("articles");
    if (window.location.hash === "#articles" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const sliderRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [interactionTimeout, setInteractionTimeout] = useState(null);

  useEffect(() => {
    let interval;
    if (!isUserInteracting && sliderRef.current) {
      interval = setInterval(() => {
        sliderRef.current.slickNext();
      }, 1000); //Adds 1 second to the time to wait to slide
    }
    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    if (interactionTimeout) {
      clearTimeout(interactionTimeout);
    }
    setInteractionTimeout(setTimeout(() => setIsUserInteracting(false), 3000)); // Reset interaction state after 3 seconds of inactivity
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      // For mobile, show only one slide
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: handleUserInteraction,
  };

  return (
    <Element
      name="articles"
      id="articles"
      className="p-8 lg:px-16 min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-32"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center lg:text-left text-black">
          Articles
        </h2>
        <p className="mb-8 text-center lg:text-left">
          I write about a wide range of topics, including university life,
          productivity, history, and of course, technology!
        </p>
        <div className="relative w-full">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {articlesData.map((article, index) => (
              <div key={index} className="p-4 h-96">
                <div className="bg-white p-6 shadow-lg rounded-lg h-full flex flex-col justify-between border border-black">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-black">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-black h-24 overflow-hidden">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-auto mb-4 flex flex-wrap gap-2 justify-start">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-orange-200 text-black px-2 py-1 rounded-full text-sm border border-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-blue-700 text-white px-4 py-2 rounded-lg text-center button"
                  >
                    Read on Medium.com
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
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

export default Articles;
