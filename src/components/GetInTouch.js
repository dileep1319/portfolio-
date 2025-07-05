import React from 'react';

const GetInTouch = () => {
  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px' }}>GET IN TOUCH</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
          <div className="mb-3" style={{ fontSize: '1.25rem', color: '#222' }}>
            Looking to Grow Your Business through App Development?<br />Let’s Chat for Tips!
          </div>
        </div>
        <div className="row justify-content-center align-items-start">
          {/* Contact Info */}
          <div className="col-md-5 mb-4 mb-md-0 d-flex flex-column align-items-start justify-content-center">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3" style={{ fontSize: '2rem', color: '#0a2342' }}></i>
                <div>
                  <div style={{ color: '#0a2342', fontWeight: 700, fontSize: '1.25rem' }}>Call Me (WhatsApp)</div>
                  <div style={{ color: '#888', fontSize: '1.15rem' }}>03499436316</div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-3" style={{ fontSize: '2rem', color: '#0a2342' }}></i>
                <div>
                  <div style={{ color: '#0a2342', fontWeight: 700, fontSize: '1.25rem' }}>Mail Me:</div>
                  <div style={{ color: '#888', fontSize: '1.15rem' }}>dileepkumar18311@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="mb-4">
              <div className="fw-bold" style={{ fontSize: '2rem', color: '#0a2342' }}>Ready to Share Your Thoughts? Let's Start!</div>
              <div style={{ color: '#222', fontSize: '1.15rem', marginTop: '0.5rem' }}>
                Got an innovative idea for app development, UI/UX design or web app development? Share your thoughts and let’s collaborate to turn your vision into reality.
              </div>
            </div>
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn fw-bold px-5" style={{ background: '#FFD600', color: '#222', fontSize: '1.25rem' }}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch; 