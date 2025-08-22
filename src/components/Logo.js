import React, { useState } from 'react';
import './Logo.css';

const Logo = ({ size = 'medium', showText = true, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    console.error('Logo image failed to load');
    console.error('Error details:', e);
    console.error('Image src attempted:', e.target.src);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Logo image loaded successfully!');
  };

  return (
    <div className={`logo ${size} ${className}`}>
      <div className="logo-icon">
        {!imageError ? (
          <img 
            src="/images/primebuilt-logo.png" 
            alt="PrimeBuilt Brothers Logo" 
            className="logo-image"
            onError={handleImageError}
            onLoad={handleImageLoad}
           // style={{ border: '1px solid red' }} // Debug border
          />
        ) : (
          <div className="logo-fallback">
            <span>🏠</span>
            <small style={{ fontSize: '0.6em', display: 'block', marginTop: '2px' }}>
              Logo not found
            </small>
          </div>
        )}
      </div>
      {showText && (
        <div className="logo-text">
          <span className="logo-main">PRIMEBUILT</span>
          <span className="logo-subtitle">BROTHERS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
