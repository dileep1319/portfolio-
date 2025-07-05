import React from 'react';

const skills = [
  {
    title: 'Web Development',
    details: 'HTML, CSS, JavaScript, ReactJS, Bootstrap, Responsive Design',
    level: 90,
  },
  {
    title: 'Data Science',
    details: 'Python, Pandas, Numpy, Data Visualization, Data Analysis',
    level: 85,
  },
  {
    title: 'AI / ML',
    details: 'Machine Learning, Deep Learning, Model Deployment',
    level: 80,
  },
  {
    title: 'API Integration',
    details: 'REST APIs, WebSocket, Multipart Form Data, API Testing',
    level: 85,
  },
  {
    title: 'Database Management',
    details: 'SQL, NoSQL, Data Structuring, Optimization',
    level: 88,
  },
  {
    title: 'Version Control',
    details: 'Proficient in Git & GitHub (Branching, Merging, etc.)',
    level: 92,
  },
];

const SkillSet = () => {
  // Split skills into two columns
  const leftSkills = skills.filter((_, i) => i % 2 === 0);
  const rightSkills = skills.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-5" style={{ background: '#fcfcfc' }} id="skills">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px' }}>MY SKILL SET</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
          <div className="mb-4" style={{ fontSize: '1.08rem', color: '#222' }}>
            Expertise & Proficiency: Web Development, Data Science, and AI/ML
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {leftSkills.map((skill, idx) => (
              <div className="mb-3" key={idx}>
                <div className="mb-1" style={{ color: '#0a2342', fontSize: '1.01rem', fontWeight: 500 }}>{skill.title}</div>
                <div className="progress" style={{ height: '18px', background: '#e9e9e9', borderRadius: '0', overflow: 'visible' }}>
                  <div
                    className="progress-bar d-flex align-items-center"
                    role="progressbar"
                    style={{
                      width: `${skill.level}%`,
                      background: '#ffd54f',
                      color: '#222',
                      fontWeight: 500,
                      fontSize: '0.93rem',
                      borderRadius: '0',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      boxShadow: 'none',
                      textOverflow: 'ellipsis',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    title={skill.details}
                  >
                    <span style={{
                      width: '100%',
                      textAlign: 'left',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'block',
                      paddingLeft: '0.5rem',
                      lineHeight: '18px',
                      margin: 0,
                    }}>{skill.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {rightSkills.map((skill, idx) => (
              <div className="mb-3" key={idx}>
                <div className="mb-1" style={{ color: '#0a2342', fontSize: '1.01rem', fontWeight: 500 }}>{skill.title}</div>
                <div className="progress" style={{ height: '18px', background: '#e9e9e9', borderRadius: '0', overflow: 'visible' }}>
                  <div
                    className="progress-bar d-flex align-items-center"
                    role="progressbar"
                    style={{
                      width: `${skill.level}%`,
                      background: '#ffd54f',
                      color: '#222',
                      fontWeight: 500,
                      fontSize: '0.93rem',
                      borderRadius: '0',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      boxShadow: 'none',
                      textOverflow: 'ellipsis',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    title={skill.details}
                  >
                    <span style={{
                      width: '100%',
                      textAlign: 'left',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'block',
                      paddingLeft: '0.5rem',
                      lineHeight: '18px',
                      margin: 0,
                    }}>{skill.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet; 