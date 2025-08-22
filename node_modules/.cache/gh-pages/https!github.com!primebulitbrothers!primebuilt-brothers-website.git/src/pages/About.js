import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaLeaf, FaHome, FaArrowRight, FaCheckCircle, FaUsers, FaAward, FaClock } from 'react-icons/fa';
import Logo from '../components/Logo';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaTools />,
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. Every project is completed with attention to detail and expert precision."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality."
    },
    {
      icon: <FaAward />,
      title: "Proven Experience",
      description: "With years of experience in the industry, we bring expertise and reliability to every project."
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description: "We respect your time and complete projects on schedule without sacrificing quality."
    }
  ];

  const team = [
    {
      name: "Gunveer Singh",
      role: "Co-Founder",
      description: "Specializes in kitchen remodeling and custom woodwork with over 5 years of experience."
    },
    {
      name: "Tanveer Singh",
      role: "Co-Founder",
      description: "Expert in outdoor design and hardscaping with a passion for creating beautiful outdoor spaces."
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About <Logo size="xxlarge" className="hero-logo" /></h1>
            <p className="about-hero-subtitle">
              Building dreams, one project at a time. We're passionate about transforming spaces 
              and exceeding expectations with every job we complete.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                Founded in 2019, PrimeBuilt Brothers began as a small family operation with a big dream:
                to provide exceptional home improvement services that truly make a difference in people's lives.
              </p>
              <p className="story-description">
                What started as a passion for craftsmanship has grown into a trusted business serving 
                Northern Virginia and surrounding areas. We've built our reputation on quality work, 
                honest communication, and genuine care for our customers' satisfaction.
              </p>
              <p className="story-description">
                Today, we continue to expand our services while maintaining the same dedication to 
                excellence that inspired us from the beginning. Every project is an opportunity to 
                showcase our skills and build lasting relationships with our community.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <FaHome className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core principles guide everything we do and ensure exceptional results
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Skilled professionals dedicated to bringing your vision to life
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-member-avatar">
                  <FaUsers className="avatar-icon" />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Work With Us?</h2>
            <p className="about-cta-subtitle">
              Let's discuss your project and see how we can help bring your vision to life
            </p>
            <div className="about-cta-buttons">
              <Link to="/quote" className="btn btn-primary">
                Get Free Quote
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

export default About;
