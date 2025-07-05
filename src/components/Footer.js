import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer style={{ background: '#111', color: '#eee', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="row mb-5">
          {/* Get In Touch */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="fw-bold mb-4" style={{ color: '#fff', borderLeft: '5px solid #FFD600', paddingLeft: '16px', fontSize: '2rem' }}>GET IN TOUCH</h4>
            <div className="mb-3">
              <div className="fw-bold" style={{ color: '#fff', fontSize: '1.1rem' }}>Email Address</div>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>dileepkumar18311@gmail.com</div>
            </div>
            <div className="mb-3">
              <div className="fw-bold" style={{ color: '#fff', fontSize: '1.1rem' }}>Phone Number</div>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>03499436316</div>
            </div>
            <div className="mb-3">
              <div className="fw-bold" style={{ color: '#fff', fontSize: '1.1rem' }}>Location</div>
              <div style={{ color: '#ccc', fontSize: '1.1rem' }}>Pakistan</div>
            </div>
          </div>
          {/* About Me */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-4" style={{ color: '#fff', borderLeft: '5px solid #FFD600', paddingLeft: '16px', fontSize: '2rem' }}>ABOUT ME</h4>
            <div style={{ color: '#ccc', fontSize: '1.15rem', maxWidth: 600 }}>
              I’m a passionate web developer and software engineer ready to assist you in growing and expanding your business through app development. With expertise in web, mobile, and AI/ML, I can create high-quality, user-friendly applications tailored to your needs. I specialize in designing immersive and visually appealing user interfaces that exceed client expectations. My focus is always on enhancing user experience and engagement.
            </div>
          </div>
        </div>
        <div className="row align-items-center pt-3 mt-4 border-top" style={{ borderColor: '#222' }}>
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div className="small" style={{ color: '#aaa' }}>
              &copy; {new Date().getFullYear()} Dileep Kumar. All rights reserved.
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <a href="https://github.com/dileep1319" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', fontSize: '1.5rem' }}><i className="bi bi-github"></i></a>
              <a href="https://instagram.com/dileep_sukhani" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', fontSize: '1.5rem' }}><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/dileep-kumar-219121235" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', fontSize: '1.5rem' }}><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 