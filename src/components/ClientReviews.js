import React from 'react';

const reviews = [
  {
    number: '01.',
    text: 'Outstanding work! Delivered the project on time and exceeded expectations. Highly recommended for web development and data science projects.',
    name: 'John Doe',
    rating: 5,
  },
  {
    number: '02.',
    text: 'Very professional and skilled. Communication was clear and the results were fantastic. Will definitely hire again for AI/ML solutions.',
    name: 'Jane Smith',
    rating: 5,
  },
  {
    number: '03.',
    text: 'Great experience! The project was handled with expertise and attention to detail. My business benefited a lot from the delivered solution.',
    name: 'Alex Lee',
    rating: 5,
  },
];

const ClientReviews = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0a2342', letterSpacing: '2px' }}>CLIENT REVIEWS</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ borderBottom: '4px solid #ffd54f', width: '90px', borderRadius: '2px', position: 'relative' }}></div>
          </div>
          <div className="mb-4" style={{ fontSize: '1.08rem', color: '#222' }}>
            See what clients say about working with me.
          </div>
        </div>
        <div className="row justify-content-center">
          {reviews.map((review, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm border-0 p-3">
                <div className="fw-bold mb-2" style={{ color: '#ffd54f', fontSize: '1.5rem' }}>{review.number}</div>
                <div className="mb-3" style={{ color: '#222', fontSize: '1.05rem', minHeight: '80px' }}>
                  {review.text}
                </div>
                <div className="mb-2 fw-semibold" style={{ color: '#0a2342' }}>{review.name}</div>
                <div>
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill" style={{ color: '#FFD600', fontSize: '1.1rem', marginRight: '2px' }}></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews; 