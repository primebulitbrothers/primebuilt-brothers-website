import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaHome } from 'react-icons/fa';
import './QuoteConfirmation.css';

const QuoteConfirmation = () => {
  const nextSteps = [
    {
      step: '01',
      title: 'Form Received',
      description: 'We\'ve received your quote request and are reviewing your project details.',
      completed: true
    },
    {
      step: '02',
      title: 'Initial Review',
      description: 'Our team will review your requirements and prepare for consultation.',
      completed: false
    },
    {
      step: '03',
      title: 'Consultation Call',
      description: 'We\'ll schedule a call or meeting to discuss your project in detail.',
      completed: false
    },
    {
      step: '04',
      title: 'Quote Delivery',
      description: 'Receive your detailed quote within 24-48 hours of consultation.',
      completed: false
    }
  ];

  const contactMethods = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      content: '(571) 992-9966',
      //link: 'tel:+1234567890',
      description: 'Speak directly with our team'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'primescapebrothers1@gmail.com',
      link: 'mailto:primescapebrothers1@gmail.com',
      description: 'Send us a detailed message'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM',
      link: '#',
      description: 'Sat: 9AM-4PM'
    }
  ];

  return (
    <div className="quote-confirmation-page">
      {/* Success Section */}
      <section className="success-section">
        <div className="container">
          <div className="success-content">
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h1 className="success-title">Thank You!</h1>
            <p className="success-subtitle">
              Your quote request has been successfully submitted. We're excited to work with you 
              on your project and will be in touch soon.
            </p>
            <div className="success-details">
              <p className="confirmation-number">
                <strong>Confirmation #:</strong> QB-{Date.now().toString().slice(-6)}
              </p>
              <p className="response-time">
                <strong>Response Time:</strong> Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="section next-steps-section">
        <div className="container">
          <h2 className="section-title">What Happens Next?</h2>
          <p className="section-subtitle">
            Here's what you can expect in the coming days as we process your request
          </p>
          
          <div className="steps-timeline">
            {nextSteps.map((step, index) => (
              <div key={index} className={`step-item ${step.completed ? 'completed' : ''}`}>
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {step.completed && (
                  <div className="step-check">
                    <FaCheckCircle />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info-section">
        <div className="container">
          <h2 className="section-title">Need to Reach Us?</h2>
          <p className="section-subtitle">
            Have questions or need to make changes to your request? Here are the best ways to get in touch.
          </p>
          
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <a href={method.link} className="method-content">
                  {method.content}
                </a>
                <p className="method-description">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section resources-section">
        <div className="container">
          <h2 className="section-title">While You Wait</h2>
          <p className="section-subtitle">
            Explore our website to learn more about our services and see examples of our work
          </p>
          
          <div className="resources-grid">
            <div className="resource-card card">
              <h3>Browse Our Services</h3>
              <p>Learn more about our kitchen remodeling and landscaping services.</p>
              <Link to="/services" className="resource-link">
                View Services <FaArrowRight />
              </Link>
            </div>
            
            <div className="resource-card card">
              <h3>About Our Company</h3>
              <p>Discover our story, values, and commitment to quality craftsmanship.</p>
              <Link to="/about" className="resource-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
            
            <div className="resource-card card">
              <h3>Contact Information</h3>
              <p>Find all our contact details and business hours.</p>
              <Link to="/contact" className="resource-link">
                Contact Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section confirmation-cta">
        <div className="container">
          <div className="confirmation-cta-content">
            <h2 className="confirmation-cta-title">Questions About Your Request?</h2>
            <p className="confirmation-cta-subtitle">
              Don't hesitate to reach out if you have any questions or need to make changes 
              to your quote request.
            </p>
            <div className="confirmation-cta-buttons">
              <a href="tel:+1234567890" className="btn btn-primary">
                Call Us Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Return Home */}
      <section className="section return-home-section">
        <div className="container">
          <div className="return-home-content">
            <Link to="/" className="return-home-link">
              <FaHome />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteConfirmation;
