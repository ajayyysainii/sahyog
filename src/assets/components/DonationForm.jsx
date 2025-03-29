import React, { useState } from 'react';

const projects = [
  { id: 1, name: "Education for Underprivileged" },
  { id: 2, name: "Healthcare Support" },
  { id: 3, name: "Rural Development" },
  { id: 4, name: "Women Empowerment" },
  { id: 5, name: "Environmental Conservation" }
];

const DonationForm = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [amount, setAmount] = useState('');

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonation = async () => {
    if (!selectedProject || !amount) {
      alert('Please select a project and enter amount');
      return;
    }

    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load');
      return;
    }

    const options = {
      key: 'BXSAVuGXl6ksFkpvrs3Vegev',
      amount: Number(amount) * 100, // Amount in paise
      currency: 'INR',
      name: 'Sahyog',
      description: `Donation for ${selectedProject}`,
      handler: function(response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        setSelectedProject('');
        setAmount('');
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#2563EB'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const predefinedAmounts = [100, 500, 1000, 5000];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Make a Donation</h2>
          <p className="mt-2 text-gray-600">Your support makes a difference</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Project
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  ₹{preAmount}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleDonation}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;