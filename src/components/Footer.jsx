import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Mort1-kode" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/morten-olsen-8bb538199/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <p>© 2026 Morten | Frontend Developer</p>
    </footer>
  );
}

export default Footer;