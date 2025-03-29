import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = () => {
  // Array of accordion items
  const accordionItems = [
    {
      id: 1,
      question: "Real Impact, Not Just Relief",
      answer: "Fund projects that build lasting infrastructure, not just temporary fixes"
    },
    {
      id: 2,
      question: "Maximize Your Donation",
      answer: "Pool funds for large-scale projects, achieving what small donations can't"
    },
    {
      id: 3,
      question: "Sustainable Development",
      answer: "Create self-sufficient communities with long-term benefits, not just short-term aid"
    },
    {
      id: 4,
      question: "Community Empowerment",
      answer: "Projects designed for local ownership and maintenance, creating jobs and fostering independence"
    }
  ];

  // Track which accordion items are open
  const [openItems, setOpenItems] = useState({});

  // Toggle the open state of an accordion item
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="sm:w-[900px] w-screen  mx-auto">
      {accordionItems.map((item) => (
        <div 
          key={item.id} 
          className="border border-gray-200 mb-2 rounded-md overflow-hidden"
        >
          <button
            className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleItem(item.id)}
          >
            <span className="font-medium text-gray-900">
              {item.question}
            </span>
            <span className="ml-6 flex-shrink-0">
              {openItems[item.id] ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </span>
          </button>
          
          {openItems[item.id] && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;