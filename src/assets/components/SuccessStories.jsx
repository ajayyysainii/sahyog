import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import development from "../UI/development.jpg"
import solarpanel from "../UI/solarpanel.jpg"
import wells from "../UI/wells.jpg"
import machine from "../UI/machine.jpg"

const successStories = [
  {
    id: 1,
    title: "Bridge Project",
    location: "Rural Maharashtra, India",
    description: "Bridges were built to connect the local areas with the city, and reducing the travelling time by 60%.",
    image: development
  },
  {
    id: 2,
    title: "Employment Hub",
    location: "Rular Bihar, India",
    description: "A facility that trains people to earn for themselves. Provides them with accomodation and food + training in different fields like urban farming, dairy, textiles etc.",
    image: machine
  },
  {
    id: 3,
    title: "Clean Water Project",
    location: "Badmer, India",
    description: "Installation of water purification systems benefiting 15 communities, providing clean drinking water to over 5,000 residents.",
    image: wells
  },
  {
    id: 4,
    title: "Sustainable Farm",
    location: "Barnala, India",
    description: "An eco-friendly farming project that supports 100 local families while promoting sustainable agricultural practices.",
    image: solarpanel
  }
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Success Stories
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="relative h-[500px] w-full">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col md:flex-row h-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full md:w-1/2 h-64 md:h-full relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-4">
                      {story.location}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;