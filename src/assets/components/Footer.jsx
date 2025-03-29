import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black w-full text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
      {/* Hero Text Section */}
      <motion.div 
      initial={{ y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{ duration: 1}}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 id='imagestyle' className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight ">
            Building Futures, One Crowdfunded brick at a time
          </h1>
          <p className="text-[#e7e7e7] text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
            Together for Change, Stronger for the Future
          </p>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="flex items-start">
            <h1 className="text-2xl sm:text-3xl font-bold">Sahyog.</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg sm:text-xl mb-4">Important Links</h2>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="hover:text-[#FFE079] transition-colors duration-200 w-fit"
              >
                Home
              </Link>
              <Link 
                to="/AboutUs" 
                className="hover:text-[#FFE079] transition-colors duration-200 w-fit"
              >
                About Us
              </Link>
              <Link 
                to="/projects" 
                className="hover:text-[#FFE079] transition-colors duration-200 w-fit"
              >
                Projects
              </Link>
              <Link 
                to="/login" 
                className="hover:text-[#FFE079] transition-colors duration-200 w-fit"
              >
                Login
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
              Join in. Get <span className="block">updates</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address" 
                className="bg-[#2f3740] rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-[#FFE079] transition-all duration-200"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-[#FFE079] text-black rounded-lg px-6 py-3 font-medium hover:bg-[#ffd84f] transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sahyog. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;