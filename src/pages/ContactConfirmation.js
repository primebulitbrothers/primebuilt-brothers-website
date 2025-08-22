import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone, FaEnvelope, FaArrowLeft, FaHome } from 'react-icons/fa';
import './ContactConfirmation.css';

const ContactConfirmation = () => {
  return (
    <div className="contact-confirmation-page">
      {/* Hero Section */}
      <section className="confirmation-hero">
        <div className="container">
          <div className="confirmation-content">
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h1 className="confirmation-title">Message Sent Successfully!</h1>
            <p className="confirmation-subtitle">
              Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section next-steps">
        <div className="container">
          <h2 className="section-title">What Happens Next?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Message Received</h3>
              <p>We've received your message and will review it within the next few hours.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Team Review</h3>
              <p>Our team will review your inquiry and prepare a personalized response.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Back to You</h3>
              <p>We'll contact you via email or phone within 24 hours with detailed information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section contact-methods">
        <div className="container">
          <h2 className="section-title">Other Ways to Reach Us</h2>
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="method-icon">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p className="method-content">(571) 992-9966</p>
              <p className="method-description">Speak directly with our team</p>
            </div>
            <div className="contact-method-card">
              <div className="method-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p className="method-content">primescapebrothers1@gmail.com</p>
              <p className="method-description">Send us a detailed email</p>
            </div>
            <div className="contact-method-card">
              <div className="method-icon">
                <FaHome />
              </div>
              <h3>Visit Us</h3>
              <p className="method-content">8460 Hessian Hill Ct</p>
              <p className="method-description">Schedule an in-person meeting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-subtitle">
              While you wait for our response, explore our services and get inspired for your next project.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">
                View Our Services
              </Link>
              <Link to="/quote" className="btn btn-secondary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section navigation-section">
        <div className="container">
          <div className="navigation-content">
            <Link to="/contact" className="btn btn-outline">
              <FaArrowLeft />
              Back to Contact Page
            </Link>
            <Link to="/" className="btn btn-outline">
              <FaHome />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactConfirmation;
