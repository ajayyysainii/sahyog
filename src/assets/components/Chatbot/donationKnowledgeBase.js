export const donationResponses = {
    // General donation questions
    "how are you": "I am fine! How are you",
    "how can i donate": "You can donate through our secure payment portal using credit/debit cards, bank transfers, or digital wallets. All donations are tax-deductible and go directly to our infrastructure projects.",
    
    "what payment methods": "We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), UPI, net banking, and digital wallets like PayPal and Google Pay.",
    
    "is my donation tax deductible": "Yes! All donations to our platform are tax-deductible. You will receive a donation receipt that you can use for tax purposes immediately after your donation.",
    
    "minimum donation": "There is no minimum donation amount. Every contribution helps, whether it's ₹100 or ₹100,000. Together, small donations pool into meaningful infrastructure development.",
    
    "where does my money go": "Your donation goes directly to the infrastructure project you select. We maintain full transparency with detailed breakdowns of fund allocation and regular progress updates on each project.",
    
    // Project specific questions
    "what projects": "We currently have several active infrastructure projects including solar-powered water wells in rural areas, housing developments for homeless communities, and primary healthcare centers. You can view all projects on our Projects page.",
    
    "how to choose a project": "You can browse all available projects on our platform, filtering by location, type, or funding status. Each project has detailed information about its impact, timeline, and funding needs to help you make a decision.",
    
    // Impact questions
    "impact of donations": "Your donations create lasting change through sustainable infrastructure. For example, a ₹50,000 donation can help provide clean water to a village of 500 people for over 10 years through our well projects.",
    
    "track my donation": "You can track the progress of projects you've donated to through your donor dashboard. We provide regular updates including photos, videos, and milestone achievements.",
    
    // Organization questions
    "about your organization": "We are a non-profit platform dedicated to pooling charitable donations for large-scale infrastructure projects that create lasting change in underserved communities. Unlike traditional charities, we focus on permanent solutions rather than temporary relief.",
    
    "how are you different": "Unlike traditional charities that focus on immediate relief, we build permanent infrastructure that provides long-term solutions. We pool smaller donations to fund major projects that would otherwise be impossible, creating sustainable change.",
    
    // Default fallbacks
    "default": "I am here to help you with donations and information about our infrastructure projects. Please ask me about donation methods, our projects, or how your contribution makes a difference."
  };
  
  // Function to find the best match for user queries
  export const findBestMatch = (userMessage) => {
    // Convert message to lowercase and remove punctuation
    const normalizedMessage = userMessage.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    // Check for exact matches first
    if (donationResponses[normalizedMessage]) {
      return donationResponses[normalizedMessage];
    }
    
    // Look for partial matches
    for (const [key, response] of Object.entries(donationResponses)) {
      // Skip the default response when checking for partial matches
      if (key === 'default') continue;
      
      if (normalizedMessage.includes(key) || key.includes(normalizedMessage)) {
        return response;
      }
    }
    
    // Check for specific keywords
    const keywords = {
      'donate': 'how can i donate',
      'payment': 'what payment methods',
      'tax': 'is my donation tax deductible',
      'minimum': 'minimum donation',
      'money': 'where does my money go',
      'project': 'what projects',
      'choose': 'how to choose a project',
      'impact': 'impact of donations',
      'track': 'track my donation',
      'about': 'about your organization',
      'different': 'how are you different'
    };
    
    for (const [keyword, responseKey] of Object.entries(keywords)) {
      if (normalizedMessage.includes(keyword)) {
        return donationResponses[responseKey];
      }
    }
    
    // Return null if no match found
    return null;
  };