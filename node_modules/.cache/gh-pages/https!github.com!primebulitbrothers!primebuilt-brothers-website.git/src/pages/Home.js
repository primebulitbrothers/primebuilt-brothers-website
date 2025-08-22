import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaLeaf, FaHome, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Logo from '../components/Logo';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: "Kitchen Remodeling",
      icon: <FaTools />,
      description: "Transform your kitchen with modern designs and expert craftsmanship"
    },
    {
      title: "Custom Closets",
      icon: <FaHome />,
      description: "Maximize space with custom closet solutions"
    },
    {
      title: "Landscaping",
      icon: <FaLeaf />,
      description: "Create beautiful outdoor spaces that enhance your home"
    }
  ];

  const features = [
    {
      title: "Expert Craftsmanship",
      icon: <FaTools />,
      description: "Over 5 years of experience in home improvement"
    },
    {
      title: "Quality Materials",
      icon: <FaHome />,
      description: "Premium materials for lasting results"
    },
    {
      title: "Customer Satisfaction",
      icon: <FaLeaf />,
      description: "100% satisfaction guaranteed on all projects"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <img src="/images/modern-kitchen-hero.jpg" alt="Modern Kitchen" className="hero-image" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Home with <span className="highlight">Expert Craftsmanship</span></h1>
          <p className="hero-subtitle">Professional kitchen remodeling and landscaping services that exceed expectations</p>
          <div className="hero-buttons">
            <Link to="/quote" className="btn btn-primary">Get Free Quote <FaArrowRight /></Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From kitchen transformations to outdoor paradise, we handle every detail with precision
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-header">
              <h2 className="section-title">
                Why Choose <Logo size="xlarge" className="inline-logo" />?
              </h2>
              <p className="section-subtitle">
                We combine years of experience with innovative techniques to deliver exceptional results
              </p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="why-choose-cta">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Space?</h2>
            <p className="cta-subtitle">
              Get started with a free consultation and quote. No obligation, just expert advice.
            </p>
            <div className="cta-buttons">
              <Link to="/quote" className="btn btn-primary">
                Get Free Quote
              </Link>
              <a href="tel:+5719929966" className="btn btn-secondary">
                Call Now: (571) 992-9966
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
