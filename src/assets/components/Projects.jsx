import React from 'react';
import { Share, Clock, Users } from 'lucide-react';
import Design from '../UI/design.jpg'
const ProjectCard = ({ project, onDonate }) => {
  // Extract project details
  const {
    id,
    title,
    username,
    image,
    fundingNeeded,
    fundingReceived,
    daysLeft,
    supporters,
    description
  } = project;

  // Calculate funding percentage
  const fundingPercentage = Math.round((fundingReceived / fundingNeeded) * 100);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDonate = () => {
    if (onDonate) {
      onDonate(id);
    } else {
      window.location.href = `/project/${id}`;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.origin + '/project/' + id,
      }).catch(err => {
        console.log('Error sharing:', err);
      });
    } else {
      alert(`Share this project: ${window.location.origin}/project/${id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white/90 py-1 px-3 rounded-full flex items-center">
          <Clock className="w-4 h-4 text-orange-500 mr-1" />
          <span className="text-sm font-medium">{daysLeft} days left</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">by {username}</p>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${fundingPercentage}%` }}></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-700 font-medium">{formatCurrency(fundingReceived)}</span>
            <span className="text-gray-500">{fundingPercentage}%</span>
            <span className="text-gray-700 font-medium">{formatCurrency(fundingNeeded)}</span>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{supporters} supporters</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={handleDonate} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">Donate</button>
          <button onClick={handleShare} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ onDonate }) => {
  // Sample project data
  const sampleProjects = [
    {
      id: 124,
      title: 'Water Well Construction in Maharashtra',
      username: 'Clean Water Initiative',
      image: Design,
      fundingNeeded: 300000,
      fundingReceived: 120000,
      daysLeft: 20,
      supporters: 85,
      description: 'Providing clean drinking water to a drought-prone village.'
    },
    {
      id: 125,
      title: 'Bridge Construction in Assam',
      username: 'Rural Connectivity Project',
      image: Design,
      fundingNeeded: 800000,
      fundingReceived: 450000,
      daysLeft: 30,
      supporters: 190,
      description: 'Building a safe and reliable bridge for better access to schools and hospitals.'
    },
    {
      id: 126,
      title: 'School Renovation in Uttar Pradesh',
      username: 'Education for All',
      image: Design,
      fundingNeeded: 600000,
      fundingReceived: 275000,
      daysLeft: 25,
      supporters: 142,
      description: 'Renovating classrooms and providing better facilities for students.'
    },
    {
      id: 127,
      title: 'Public Library in Bihar',
      username: 'Knowledge Hub Initiative',
      image: Design,
      fundingNeeded: 350000,
      fundingReceived: 150000,
      daysLeft: 18,
      supporters: 97,
      description: 'Establishing a library with digital learning resources in a rural area.'
    },
    {
      id: 128,
      title: 'Rural Road Development in Madhya Pradesh',
      username: 'Better Roads Initiative',
      image: Design,
      fundingNeeded: 950000,
      fundingReceived: 600000,
      daysLeft: 40,
      supporters: 210,
      description: 'Improving road infrastructure to enhance transportation and connectivity.'
    },
    {
      id: 129,
      title: 'Community Health Center in Odisha',
      username: 'Healthcare for All',
      image: Design,
      fundingNeeded: 700000,
      fundingReceived: 350000,
      daysLeft: 22,
      supporters: 160,
      description: 'Setting up a healthcare facility with essential medical services.'
    },
    {
      id: 130,
      title: 'Affordable Housing Project in West Bengal',
      username: 'Shelter for All',
      image: Design,
      fundingNeeded: 1200000,
      fundingReceived: 750000,
      daysLeft: 50,
      supporters: 280,
      description: 'Providing low-cost housing solutions for underprivileged families.'
    },
    {
      id: 131,
      title: 'Rainwater Harvesting in Tamil Nadu',
      username: 'Water Conservation Drive',
      image: Design,
      fundingNeeded: 400000,
      fundingReceived: 225000,
      daysLeft: 28,
      supporters: 110,
      description: 'Implementing rainwater harvesting systems in water-scarce areas.'
    },
    {
      id: 132,
      title: 'Wind Energy Project in Gujarat',
      username: 'Green Energy Solutions',
      image: Design,
      fundingNeeded: 1500000,
      fundingReceived: 950000,
      daysLeft: 60,
      supporters: 350,
      description: 'Developing wind energy solutions to power rural communities.'
    },
    {
      id: 133,
      title: 'Sanitation Facilities in Jharkhand',
      username: 'Clean India Initiative',
      image: Design,
      fundingNeeded: 500000,
      fundingReceived: 300000,
      daysLeft: 35,
      supporters: 175,
      description: 'Constructing toilets and improving sanitation infrastructure in remote areas.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onDonate={onDonate} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;