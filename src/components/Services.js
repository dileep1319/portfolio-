import React from 'react';

const services = [
  {
    icon: 'bi bi-code-slash',
    title: 'Web Development',
    description: 'Custom, high-performance web applications tailored to your business needs, using the latest technologies and best practices.'
  },
  {
    icon: 'bi bi-bar-chart',
    title: 'Data Science',
    description: 'Data analysis, visualization, and actionable insights to help you make data-driven decisions and grow your business.'
  },
  {
    icon: 'bi bi-cpu',
    title: 'AI / ML',
    description: 'Artificial Intelligence and Machine Learning solutions to automate, optimize, and innovate your business processes.'
  }
];

const Services = () => {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px' }}>SERVICES FIT YOUR NEEDS PERFECTLY</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
          <div className="mb-4" style={{ fontSize: '1.08rem', color: '#222' }}>
            Discover a range of professional services designed to help you succeed. I offer solutions that fit your needs perfectly, ensuring quality and satisfaction every time.
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className={`${service.icon} mb-3`} style={{ fontSize: '2.5rem', color: '#FFD600' }}></i>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="mb-0 text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 