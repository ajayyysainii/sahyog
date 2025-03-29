import React from "react";
import Accordian from "./Accordian";
import Counter from "./Counter";
import { motion } from 'motion/react';

const WhySahyog = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:py-12 lg:py-16">
      <motion.div
      initial={{ x: 400, opacity: 0}}
      whileInView={{ x: 0, opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row lg:justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto">
        {/* Heading section - stacks vertically on mobile, side-by-side on desktop */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black">Why.</h1>
          <h2 className="text-5xl md:text-7xl lg:text-9xl px-1 bg-[#E0F2F0] text-[#20AD96] font-black inline-block">
            Sahyog
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl mt-3 md:mt-4 lg:mt-5 text-nowrap">
            Successful fundraisers start here
          </h3>
        </div>
        
       
        <div>
          <Accordian />
        </div>
      </motion.div>
      <Counter />
    </div>
  );
};

export default WhySahyog;