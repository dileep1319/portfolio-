import React from 'react';

const stats = [
  { icon: 'bi bi-calendar3', value: '3+', label: 'Years of Experience' },
  { icon: 'bi bi-briefcase', value: '25+', label: 'Projects Done' },
  { icon: 'bi bi-emoji-smile', value: '20+', label: 'Happy Clients' },
];

const ExperienceStats = () => {
  return (
    <section
      className="py-5 position-relative"
      id="experience"
      style={{
        background: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
        minHeight: '260px',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-4" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '12px', padding: '16px 0 8px 0', marginBottom: '2.5rem' }}>
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px', marginBottom: 0 }}>EXPERIENCE & STATS</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
        </div>
        <div className="row justify-content-center text-center text-white">
          {stats.map((stat, idx) => (
            <div className="col-6 col-md-4 mb-4 mb-md-0" key={idx}>
              <div className="d-flex flex-column align-items-center">
                <i className={`${stat.icon} mb-2`} style={{ fontSize: '2.5rem', color: '#FFD600' }}></i>
                <div className="fw-bold display-5 mb-1">{stat.value}</div>
                <div className="fw-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats; 