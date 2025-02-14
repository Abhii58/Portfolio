import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Thanks for Visiting</h1>
        
        <div className="footer-icons">
          <div className="icon"><i className="fas fa-id-badge"></i></div>
          <div className="icon"><i className="fas fa-info-circle"></i></div>
          <div className="icon"><i className="fas fa-cog"></i></div>
          <div className="icon"><i className="fas fa-globe"></i></div>
          <div className="icon"><i className="fas fa-comments"></i></div>
        </div>

        <div className="Social-media">
  <div class="icons">
    <a href="https://in.linkedin.com/in/abhishek-bijalwan-6125432a2" target="blank" class="linkedin">
      <div class="layer">
        <span></span><span></span><span></span><span class="linkedin"></span>
      </div>
    </a>

    <a href="https://instagram.com/in/abhishekbijalwan58" target="blank" class="instagram">
      <div class="layer">
        <span></span><span></span><span></span><span class="fab fa-instagram"></span>
      </div>
    </a>
    
    <a href="https://github.com/Abhii58/" target="blank" class="Github">
      <div class="layer">
        <span></span><span></span><span></span><span class="Github"></span>
      </div>
    </a>
  </div>
  <p>&copy; {new Date().getFullYear()} Abhishek Bijalwan All rights reserved.</p>
</div>

       
        
      </div>
    </footer>
  );
};

export default Footer;