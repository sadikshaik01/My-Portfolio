import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">
          <span className="error-code">404</span>
        </h1>
        
        <h2 className="notfound-subtitle">
          Oops! <span className="toon-text">Page Not Found</span>
        </h2>
        
        <p className="notfound-message">
          Looks like this page got lost in the ToonCore universe! 🌌
        </p>
        
        <div className="notfound-actions">
          <button 
            className="home-btn" 
            onClick={() => navigate("/")}
          >
            🏠 Back to Home
          </button>
          
          <button 
            className="back-btn" 
            onClick={() => navigate(-1)}
          >
            ⬅️ Go Back
          </button>
        </div>
        
        <div className="notfound-illustration">
          <div className="floating-emoji">🚀</div>
          <div className="floating-emoji delay-1">⭐</div>
          <div className="floating-emoji delay-2">💫</div>
        </div>
      </div>
    </div>
  );
}
