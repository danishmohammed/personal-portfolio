import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const element = document.getElementById("contact");
    if (window.location.hash === "#contact" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Element
      name="contact"
      id="contact"
      className="p-8 lg:px-16 min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold mb-4 text-center text-black">
          Get in Contact
        </h2>
        <p className="mb-8 text-center text-black">
          Send me a message or connect with me on social media!
        </p>
        <form
          target="_blank"
          action="https://formsubmit.co/cb7f3f60db04eaf78b140c1fa7e14c61"
          method="POST"
          className="bg-gray-100 p-6 rounded-lg shadow-md border border-black"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded border border-gray-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://www.linkedin.com/in/danish-m"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin size={40} className="text-black" />
          </a>
          <a
            href="https://github.com/danishmohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub size={40} className="text-black" />
          </a>
          <a
            href="https://danishmohammed57.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaMedium size={40} className="text-black" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .icon {
          transition: transform 0.3s ease-in-out;
        }
        .icon:hover {
          transform: scale(1.2);
        }
      `}</style>
    </Element>
  );
};

export default Contact;
