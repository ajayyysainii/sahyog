import React, { useState } from 'react';

const projects = [
  { id: 1, name: "Water Well Construction in Maharashtra" },
  { id: 2, name: "Bridge Construction in Assam" },
  { id: 3, name: "School Renovation in Uttar Pradesh" },
  { id: 4, name: "Public Library in Bihar" },
  { id: 5, name: "Rural Road Development in Madhya Pradesh" },
  { id: 6, name: "Community Health Center in Odisha" },
  { id: 7, name: "Affordable Housing Project in West Bengal" },
  { id: 8, name: "Rainwater Harvesting in Tamil Nadu" },
  { id: 9, name: "Wind Energy Project in Gujarat" },
  { id: 5, name: "Sanitation Facilities in Jharkhand" },

];

const predefinedAmounts = [100, 500, 1000, 5000];

const DonationForm = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonation = async () => {
    setError(null);
    
    if (!selectedProject) {
      setError('Please select a project');
      return;
    }

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setIsLoading(true);

    try {
      const res = await loadRazorpay();
      if (!res) {
        throw new Error('Razorpay SDK failed to load');
      }

      const options = {
        key: "rzp_test_FNM9Y9AB22JW21",
        amount: Number(amount) * 100,
        currency: 'INR',
        name: 'Sahyog',
        description: `Donation for ${selectedProject}`,
        handler: function(response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          setSelectedProject('');
          setAmount('');
          setIsLoading(false);
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#2563EB'
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function(response) {
        alert(`Payment failed! Error: ${response.error.description}`);
        setIsLoading(false);
      });
      paymentObject.open();
    } catch (err) {
      setError(err.message || 'Payment failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Make a Donation</h2>
          <p className="mt-2 text-gray-600">Your support makes a difference</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Project
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            >
              <option value="">Choose a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (INR)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quick Select Amount
            </label>
            <div className="grid grid-cols-4 gap-2">
              {predefinedAmounts.map((preAmount) => (
                <button
                  key={preAmount}
                  onClick={() => setAmount(preAmount.toString())}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  disabled={isLoading}
                  type="button"
                >
                  ₹{preAmount}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleDonation}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;