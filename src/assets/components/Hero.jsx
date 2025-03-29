import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import image from "../UI/image.png";
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className="flex justify-center mt-5">
      <div
        className="relative h-[85vh] w-[90vw] rounded-3xl bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div 
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1.5, y: 0 }}
         transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
        className="absolute bottom-0 w-full flex sm:flex-row flex-col items-center justify-between px-8 pb-8">
          <div className="flex sm:flex-row flex-col items-center gap-8">
            <h1 className="text-8xl md:text-9xl lg:text-[200px] font-bold text-white leading-none">
              Funds
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Help <span className="block">Other</span>
            </h2>
          </div>
          <Link to="/projects">
            <div className="bg-white text-black px-6 py-3 sm:mt-0 mt-5 rounded-full text-lg md:text-xl font-semibold cursor-pointer hover:bg-opacity-90 transition-all">
              Start CrowdFunding
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
