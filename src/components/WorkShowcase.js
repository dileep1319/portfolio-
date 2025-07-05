import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const projects = [
  {
    title: 'YouTube Clone',
    description: 'A fully functional YouTube clone built with ReactJS, featuring video playback, search, and responsive UI.',
    tech: 'ReactJS',
    images: ['/youtube1.png', '/youtube2.png'],
  },
  {
    title: 'Mobile App (Full Stack)',
    description: 'A cross-platform mobile app built with React Native, with a Node.js and MongoDB backend for real-time data and authentication.',
    tech: 'React Native, Node.js, MongoDB',
    images: ['/mobile1.png'],
  },
];

const WorkShowcase = () => {
  return (
    <section className="py-5 bg-white" id="work">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px' }}>MY WORK SHOWCASE</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
          <div className="mb-4" style={{ fontSize: '1.08rem', color: '#222' }}>
            Some of my recent projects demonstrating my skills and expertise.
          </div>
        </div>
        <div className="row justify-content-center">
          {projects.map((project, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                {project.images.length === 1 ? (
                  <img src={project.images[0]} alt={project.title} className="card-img-top" style={{ objectFit: 'contain', width: '100%', height: '220px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem', background: '#fff' }} />
                ) : (
                  <div id={`carousel-${idx}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                    <div className="carousel-inner">
                      {project.images.map((img, imgIdx) => (
                        <div className={`carousel-item${imgIdx === 0 ? ' active' : ''}`} key={imgIdx}>
                          <img src={img} className="d-block w-100" alt={`${project.title} screenshot ${imgIdx + 1}`} style={{ objectFit: 'cover', height: '220px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="card-body">
                  <h5 className="fw-bold mb-2" style={{ color: '#0a2342' }}>{project.title}</h5>
                  <p className="mb-2" style={{ color: '#222' }}>{project.description}</p>
                  <div className="small text-muted">Tech Stack: {project.tech}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase; 