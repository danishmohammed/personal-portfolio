import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="contact" className="p-8 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form className="mt-4">
        <input type="text" placeholder="Name" required className="block w-full p-2 mb-4 border border-gray-300" />
        <input type="email" placeholder="Email" required className="block w-full p-2 mb-4 border border-gray-300" />
        <input type="text" placeholder="Subject" required className="block w-full p-2 mb-4 border border-gray-300" />
        <textarea placeholder="Message" required className="block w-full p-2 mb-4 border border-gray-300"></textarea>
        <button type="submit" className="bg-gray-800 text-white p-2">Send Message</button>
      </form>
    </Element>
  );
}

export default Contact;
