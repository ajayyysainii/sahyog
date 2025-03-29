import React from "react";
import oceanImage from "../UI/design.jpg"; 
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="flex justify-center items-center w-screen my-16">
      <div className="bg-gray-900 text-white py-8 w-[90vw] max-w-7xl rounded-3xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Mission Statement */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Our mission</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                Pooling small donations for big infrastructure development
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mt-4 md:mt-6">
                We drive infrastructure-based donations by pooling small 
                contributions into impactful development projects.
                Through technology-driven transparency and collaboration, 
                we ensure that every donation leads to a lasting transformation.
              </p>
              <Link 
                to="/aboutus" 
                className="inline-flex items-center text-base sm:text-lg font-medium mt-2 sm:mt-4 border-b border-white pb-1 hover:opacity-80 transition-opacity"
              >
                More about our mission
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            
            {/* Right Column - Description & Image */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 mt-6 lg:mt-0">
              <p className="text-base sm:text-lg text-gray-300">
                We focus on building sustainable infrastructure 
                in education, healthcare, and community welfare.
                Our dream is that one day, every village will 
                have access to solar energy, clean water through
                wells, and well-planned housing.
              </p>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={oceanImage} 
                  alt="Ocean pollution with plastic waste" 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
              
              <p className="text-base sm:text-lg text-gray-300">
                Together, we transform small contributions into big change.
                Through collaboration, we build stronger communities and a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;