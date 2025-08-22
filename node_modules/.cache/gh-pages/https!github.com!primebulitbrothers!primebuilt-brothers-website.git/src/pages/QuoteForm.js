import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList, FaArrowRight, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaTools } from 'react-icons/fa';
import './QuoteForm.css';

const QuoteForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    
    // Create a hidden iframe to submit to Google Forms
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'google-form-submit';
    document.body.appendChild(iframe);
    
    // Create a form that will submit to Google Forms
    const googleForm = document.createElement('form');
    googleForm.method = 'POST';
    googleForm.action = 'https://docs.google.com/forms/d/e/1FAIpQLScTZ18ZgsIsHHQSfhEjcm7UuEbSYO0xU59pJqBxaR9sAbNi7g/formResponse';
    googleForm.target = 'google-form-submit';
    
         // Add form fields to Google Form
     // You'll need to map these to your actual Google Form field IDs
     const fieldMappings = {
       'entry.1773144939': formObject.name,           // Replace with actual field ID
       'entry.1588656727': formObject.email,          // Replace with actual field ID
       'entry.63747419': formObject.phone,          // Replace with actual field ID
       'entry.1988317894': formObject.service,        // Replace with actual field ID
       'entry.749211927': formObject.projectDescription, // Replace with actual field ID
       'entry.1385979070': formObject.additionalInfo  // Replace with actual field ID
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
      navigate('/quote-confirmation');
    }, 1000);
  };

  const services = [
    'Kitchen Remodeling',
    'Custom Closets',
    'Custom Patios',
    'Walkways',
    'Retaining Walls',
    'General Landscaping'
  ];

  const features = [
    'Free consultation and estimate',
    'Detailed project planning',
    'Quality materials and craftsmanship',
    'Timely project completion',
    'Post-project support'
  ];

  return (
    <div className="quote-form-page">
      {/* Hero Section */}
      <section className="quote-hero">
        <div className="container">
          <div className="quote-hero-content">
            <h1 className="quote-hero-title">Get Your Free Quote</h1>
            <p className="quote-hero-subtitle">
              Ready to transform your space? Fill out our quote form and we'll provide you with 
              a detailed estimate for your project. No obligation, just expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section quote-form-section">
        <div className="container">
          <div className="quote-content">
            {/* Form Information */}
            <div className="quote-info">
              <div className="quote-info-header">
                <FaClipboardList className="quote-icon" />
                <h2 className="quote-info-title">Request Your Quote</h2>
              </div>
              
              <p className="quote-info-description">
                Our comprehensive quote form helps us understand your project requirements 
                and provide you with the most accurate estimate possible.
              </p>

              <div className="quote-features">
                <h3 className="quote-features-title">What's Included:</h3>
                <ul className="quote-features-list">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quote-services">
                <h3 className="quote-services-title">Our Services:</h3>
                <div className="services-tags">
                  {services.map((service, index) => (
                    <span key={index} className="service-tag">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="quote-form-container">
              <div className="form-header">
                <h3 className="form-title">Quote Request Form</h3>
                <p className="form-subtitle">
                  Please fill out all required fields for the most accurate quote
                </p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="quote-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="input-icon" />
                      Full Name *
                    </label>
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
                    <label htmlFor="email">
                      <FaEnvelope className="input-icon" />
                      Email Address *
                    </label>
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
                    <label htmlFor="phone">
                      <FaPhone className="input-icon" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <FaTools className="input-icon" />
                      Service Needed *
                    </label>
                    <select id="service" name="service" required className="form-select">
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="projectDescription">
                    <FaClipboardList className="input-icon" />
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows="4"
                    placeholder="Describe your project in detail, including any specific requirements or preferences..."
                    className="form-textarea"
                  ></textarea>
                </div>



                <div className="form-group full-width">
                  <label htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="3"
                    placeholder="Any additional details, questions, or special requirements..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button 
                    type="submit"
                    className="btn btn-primary quote-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <FaArrowRight />
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <div className="form-footer">
                <p className="form-footer-text">
                  Having trouble with the form? <a href="/contact">Contact us directly</a> 
                  or call us at <a href="tel:+1234567890">(123) 456-7890</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Fallback Section */}
      <section className="section google-form-fallback">
        <div className="container">
          <div className="fallback-content">
            <h3 className="fallback-title">Alternative Form Option</h3>
            <p className="fallback-subtitle">
              If you prefer to use Google Forms directly, you can fill out the form below:
            </p>
            <div className="google-form-container">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScTZ18ZgsIsHHQSfhEjcm7UuEbSYO0xU59pJqBxaR9sAbNi7g/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Quote Request Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section additional-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>What Happens Next?</h3>
              <ol className="info-list">
                <li>Submit your quote request form</li>
                <li>We'll review your project details</li>
                <li>Schedule a consultation call or meeting</li>
                <li>Receive your detailed quote within 24-48 hours</li>
                <li>Discuss any questions or modifications</li>
                <li>Move forward with your project when ready</li>
              </ol>
            </div>
            
            <div className="info-card">
              <h3>Why Choose Us?</h3>
              <ul className="info-list">
                <li>Licensed and insured professionals</li>
                <li>Free estimates and consultations</li>
                <li>Quality craftsmanship guaranteed</li>
                <li>On-time project completion</li>
                <li>Competitive pricing</li>
                <li>Excellent customer service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteForm;
