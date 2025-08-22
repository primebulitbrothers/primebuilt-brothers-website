const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      frameSrc: ["'self'", "https://docs.google.com"],
    },
  },
}));
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'PrimeBuilt Brothers API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Kitchen Remodeling',
      description: 'Transform your kitchen with custom designs and premium materials.',
      icon: 'kitchen',
      features: [
        'Custom cabinet design and installation',
        'Countertop replacement and upgrades',
        'Appliance integration and upgrades',
        'Flooring and lighting updates',
        'Plumbing and electrical work'
      ]
    },
    {
      id: 2,
      name: 'Custom Closets',
      description: 'Maximize your storage space with custom closet solutions.',
      icon: 'closet',
      features: [
        'Walk-in closet design',
        'Custom shelving and organization',
        'Built-in storage solutions',
        'Closet system installation'
      ]
    },
    {
      id: 3,
      name: 'Custom Patios',
      description: 'Create beautiful outdoor living spaces with custom patio designs.',
      icon: 'patio',
      features: [
        'Design consultation and planning',
        'Material selection and sourcing',
        'Professional installation',
        'Drainage and foundation work'
      ]
    },
    {
      id: 4,
      name: 'Walkways',
      description: 'Enhance your property with beautiful, durable walkways.',
      icon: 'walkway',
      features: [
        'Pathway design and layout',
        'Material selection (stone, concrete, pavers)',
        'Professional installation',
        'Drainage considerations'
      ]
    },
    {
      id: 5,
      name: 'Retaining Walls',
      description: 'Functional and attractive retaining walls that solve slope issues.',
      icon: 'wall',
      features: [
        'Structural engineering and design',
        'Material selection and sourcing',
        'Professional construction',
        'Drainage system integration'
      ]
    },
    {
      id: 6,
      name: 'General Landscaping',
      description: 'Comprehensive landscaping services for your outdoor space.',
      icon: 'landscape',
      features: [
        'Landscape design and planning',
        'Plant selection and installation',
        'Irrigation system design',
        'Hardscaping elements'
      ]
    }
  ];
  
  res.json(services);
});

app.get('/api/contact', (req, res) => {
  const contactInfo = {
    phone: '(123) 456-7890',
    email: 'info@primebuiltbrothers.com',
    address: '123 Business St, City, State 12345',
    hours: {
      weekdays: '8AM-6PM',
      saturday: '9AM-4PM',
      sunday: 'Closed'
    },
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  };
  
  res.json(contactInfo);
});

// Handle form submissions (for contact form)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Here you would typically:
  // 1. Validate the data
  // 2. Send email notifications
  // 3. Store in database
  // 4. Send confirmation email
  
  console.log('Contact form submission:', { name, email, phone, service, message });
  
  // For now, just return success
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.',
    timestamp: new Date().toISOString()
  });
});

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PrimeBuilt Brothers server running on port ${PORT}`);
  console.log(`📱 API available at http://localhost:${PORT}/api`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
