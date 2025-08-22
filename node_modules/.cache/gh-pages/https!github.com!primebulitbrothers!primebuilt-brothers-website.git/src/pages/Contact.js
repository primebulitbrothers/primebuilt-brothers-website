import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formDataObj = new FormData(e.target);
    const formObject = Object.fromEntries(formDataObj);
    
    // Create a hidden iframe to submit to Google Forms
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'google-form-submit';
    document.body.appendChild(iframe);
    
    // Create a form that will submit to Google Forms
    const googleForm = document.createElement('form');
    googleForm.method = 'POST';
    googleForm.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdWMCo4dA0YPHzHtKyHRqxLfYQ1kfNhgLg4SuVljuc7rodIiw/formResponse';
    googleForm.target = 'google-form-submit';
    
    // Add form fields to Google Form
    // You'll need to map these to your actual Google Form field IDs
    const fieldMappings = {
      'entry.700331217': formObject.name,           // Replace with actual field ID
      'entry.1356039447': formObject.email,          // Replace with actual field ID
      'entry.2088623702': formObject.phone,          // Replace with actual field ID
      'entry.1294543031': formObject.service,        // Replace with actual field ID
      'entry.1159686874': formObject.message         // Replace with actual field ID
    };
    
    // Create hidden inputs for Google Form
    Object.entries(fieldMappings).forEach(([fieldId, value]) => {
      if (value) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = fieldId;
        input.value = value;
        googleForm.appendChild(input);
      }
    });
    
    // Submit to Google Forms
    document.body.appendChild(googleForm);
    googleForm.submit();
    
         // Clean up
     setTimeout(() => {
       document.body.removeChild(googleForm);
       document.body.removeChild(iframe);
       
       // Redirect to confirmation page
       navigate('/contact-confirmation');
     }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '(571) 992-9966',
      //link: 'tel:+1234567890'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'primescapebrothers1@gmail.com',
      link: 'mailto:primescapebrothers1@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: '8460 Hessian Hill Ct',
      //link: '#'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      link: '#'
    }
  ];

  const services = [
    'Kitchen Remodeling',
    'Custom Closets',
    'Custom Patios',
    'Walkways',
    'Retaining Walls',
    'General Landscaping'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              Ready to start your project? Get in touch with us for a free consultation 
              and quote. We're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="contact-section-title">Get In Touch</h2>
              <p className="contact-section-subtitle">
                We'd love to hear from you. Contact us using any of the methods below.
              </p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h3 className="contact-info-title">{info.title}</h3>
                      <a href={info.link} className="contact-info-link">
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links-section">
                <h3 className="social-links-title">Follow Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <p className="contact-section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Fallback Section */}
      <section className="section google-form-fallback">
        <div className="container">
          <div className="fallback-content">
            <h3 className="fallback-title">Alternative Contact Form Option</h3>
            <p className="fallback-subtitle">
              If you prefer to use Google Forms directly, you can fill out the form below:
            </p>
            <div className="google-form-container">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdWMCo4dA0YPHzHtKyHRqxLfYQ1kfNhgLg4SuVljuc7rodIiw/viewform?embedded=true" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            Visit our office or give us a call to discuss your project
          </p>
          <div className="map-placeholder">
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <p>Interactive Map Coming Soon</p>
              <p>123 Business St, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
