import React, { useState, useEffect } from 'react';
import { Users, Heart, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

function AnimatedNumber({ end, duration = 2000, prefix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}</span>;
}

function StatsCard({ icon: Icon, label, value, prefix = '' }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center space-y-2 transform transition-all hover:scale-105">
      <Icon className="w-8 h-8 text-white/90" />
      <h3 className="text-white/90 text-lg font-medium">{label}</h3>
      <p className="text-3xl font-bold text-white">
        <AnimatedNumber end={value} prefix={prefix} />
      </p>
    </div>
  );
}

function Counter() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] to-[#334155] p-8 rounded-2xl shadow-2xl mx-4 mt-16">
      <motion.div 
      initial={{ y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Our Impact</h1>
          <p className="text-white/80">Making a difference together</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard 
            icon={Users} 
            label="Active Users" 
            value={50000}
          />
          <StatsCard 
            icon={Heart} 
            label="Total Donations" 
            value={2500000}
            prefix="$"
          />
          <StatsCard 
            icon={Building2} 
            label="Partner Organizations" 
            value={120}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Counter;