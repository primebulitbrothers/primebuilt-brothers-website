import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaLeaf, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space that reflects your style and meets your needs.',
      features: [
        'Custom cabinet design and installation',
        'Countertop replacement and upgrades',
        'Appliance integration and upgrades',
        'Flooring and lighting updates',
        'Plumbing and electrical work',
        'Complete kitchen transformations'
      ],
      image: 'kitchen-remodeling'
    },
    {
      icon: <FaTools />,
      title: 'Custom Closets',
      description: 'Maximize your storage space with custom closet solutions designed for your specific needs.',
      features: [
        'Walk-in closet design',
        'Custom shelving and organization',
        'Built-in storage solutions',
        'Closet system installation',
        'Space optimization',
        'Premium materials and finishes'
      ],
      image: 'custom-closets'
    },
    {
      icon: <FaLeaf />,
      title: 'Custom Patios',
      description: 'Create beautiful outdoor living spaces with custom patio designs and construction.',
      features: [
        'Design consultation and planning',
        'Material selection and sourcing',
        'Professional installation',
        'Drainage and foundation work',
        'Custom features and amenities',
        'Maintenance and care guidance'
      ],
      image: 'custom-patios'
    },
    {
      icon: <FaLeaf />,
      title: 'Walkways',
      description: 'Enhance your property with beautiful, durable walkways that improve accessibility and curb appeal.',
      features: [
        'Pathway design and layout',
        'Material selection (stone, concrete, pavers)',
        'Professional installation',
        'Drainage considerations',
        'Lighting integration',
        'Maintenance and repairs'
      ],
      image: 'walkways'
    },
    {
      icon: <FaLeaf />,
      title: 'Retaining Walls',
      description: 'Functional and attractive retaining walls that solve slope issues and enhance your landscape.',
      features: [
        'Structural engineering and design',
        'Material selection and sourcing',
        'Professional construction',
        'Drainage system integration',
        'Safety and compliance',
        'Long-term maintenance'
      ],
      image: 'retaining-walls'
    },
    {
      icon: <FaLeaf />,
      title: 'General Landscaping',
      description: 'Comprehensive landscaping services to transform your outdoor space into a beautiful, functional environment.',
      features: [
        'Landscape design and planning',
        'Plant selection and installation',
        'Irrigation system design',
        'Hardscaping elements',
        'Seasonal maintenance',
        'Sustainable practices'
      ],
      image: 'general-landscaping'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet to discuss your vision, needs, and budget for the project.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and selects materials that fit your style and budget.'
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Professional installation with attention to detail and quality craftsmanship.'
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'We ensure everything meets our high standards before project completion.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              From kitchen transformations to outdoor paradise, we provide comprehensive 
              remodeling and landscaping solutions with unmatched quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-image">
                  <div className={`image-placeholder ${service.image}`}>
                    <FaHome className="placeholder-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            We follow a proven process to ensure your project is completed on time, 
            within budget, and to your complete satisfaction.
          </p>
          <div className="process-grid">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.step}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Ready to Get Started?</h2>
            <p className="services-cta-subtitle">
              Contact us today for a free consultation and quote. Let's discuss how we can 
              transform your space and bring your vision to life.
            </p>
            <div className="services-cta-buttons">
              <Link to="/quote" className="btn btn-primary">
                Get Free Quote
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
