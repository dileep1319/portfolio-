import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Photo with double border and yellow background */}
          <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
            <div style={{
              border: '10px solid #4a5562',
              padding: '18px',
              background: '#fff',
              borderRadius: '0',
              display: 'inline-block',
            }}>
              <div style={{
                background: '#FFD600',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 320,
                height: 370,
              }}>
                <img
                  src="/myphoto.png"
                  alt="Dileep Kumar"
                  style={{
                    maxHeight: 340,
                    maxWidth: 260,
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.35)',
                  }}
                />
              </div>
            </div>
          </div>
          {/* About text */}
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-2">
              <div style={{ borderLeft: '6px solid #FFD600', height: '2.5rem', marginRight: '16px' }}></div>
              <h2 className="fw-bold mb-0" style={{ fontSize: '2.5rem', color: '#0a2342', letterSpacing: '2px' }}>ABOUT ME</h2>
            </div>
            <div className="mb-3" style={{ fontSize: '1.35rem', color: '#222', fontWeight: 500 }}>
              Meet the Web Developer behind the Screen. Building apps with passion and precision
            </div>
            <p style={{ color: '#222', fontSize: '1.08rem', lineHeight: 1.7 }}>
              I’m a passionate web developer dedicated to helping businesses grow through powerful web and app development. I specialize in building high performance, cross platform applications for web and mobile. With a focus on clean architecture, responsive layouts, and seamless performance, I deliver scalable and feature rich apps to match your business needs. Whether you’re launching a new idea or upgrading an existing app, I bring expertise in custom development to bring your vision to life.
            </p>
            <p style={{ color: '#222', fontSize: '1.08rem', lineHeight: 1.7 }}>
              I’m driven by challenges and enjoy developing innovative solutions. My goal is to understand your vision and transform it into a digital reality. Let’s work together to take your business to new heights in the digital world!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 