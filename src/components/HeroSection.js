import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <style>{`
          .nav-link-underline {
            position: relative;
            color: #fff;
            transition: color 0.2s;
          }
          .nav-link-underline::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 3px;
            background: #FFD600;
            border-radius: 2px;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          }
          .nav-link-underline:hover,
          .nav-link-underline:focus {
            color: #FFD600;
          }
          .nav-link-underline:hover::after,
          .nav-link-underline:focus::after {
            transform: scaleX(1);
          }
        `}</style>
        <div className="container">
          <a className="navbar-brand fw-bold fs-1" href="#">DK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-3">
              <li className="nav-item"><a className="nav-link nav-link-underline" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link nav-link-underline" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link nav-link-underline" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link nav-link-underline" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link nav-link-underline" href="#work">Work</a></li>
              <li className="nav-item"><a className="btn btn-warning fw-bold px-4" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row w-100 align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold display-3 mb-0">I’m <span className="">Dileep Kumar</span></h1>
            <h2 className="fw-bold display-5 mb-4" style={{ color: '#FFD600' }}>Software Engineer</h2>
            <p className="lead mb-4" style={{ maxWidth: '700px' }}>
              I specialize in building high-performance web applications and software solutions with clean architecture, responsive UI, and seamless user experiences. Let’s transform your ideas into robust, scalable products that users love.
            </p>
            <a className="btn btn-warning btn-lg fw-bold px-5" href="/DileepKumarCV.pdf" style={{ color: '#222', fontSize: '1.25rem' }}>Download CV</a>
          </div>
          <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <div
              style={{
                width: '320px',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src="/myphoto.png"
                alt="Dileep Kumar"
                style={{
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 