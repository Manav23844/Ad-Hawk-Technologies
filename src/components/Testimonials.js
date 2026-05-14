import React, { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    quote: "Bipin seems like a great guy with flawless communication and really willing to take up a challenge. In this case it seems that we need somebody even more responsive and with more time available to get the desired results.",
    author: "Patrick Epler, Thailand"
  },
  {
    id: 2,
    quote: "Great PPC expert to work with. Was very satisfied with his expertise and professionalism!",
    author: "Pilar Torres Wahlberg, USA"
  },
  {
    id: 3,
    quote: "Bipin really helped support me when my agency needed extra creative capacity managing our clients' Google Ads & Bing Ads campaigns. Bipin has a deep knowledge of the platforms that allowed me to trust him with managing accounts and making changes while often providing him very little context or feedback. His autonomy and quick response time made it a pleasure to work with him. Highly recommended.",
    author: "Justing Collier, USA"
  },
  {
    id: 4,
    quote: "They were very efficient with the work carried out and on time and Budget. I highly recommend him.",
    author: "Nick Hayes, AUS"
  },
  {
    id: 5,
    quote: "It was great working with Tim, and he delivered what I wanted.",
    author: "Client A, Germany"
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const StarIcon = () => (
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

  return (
    <section className="section" id="testimonials">
      <h2>What Clients Say</h2>
      <p className="section-text">
        Real feedback from teams who wanted more visibility, better leads, and consistent growth.
      </p>

      <div className="slider-container">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonialsData.map((item) => (
            <div className="testimonial-slide" key={item.id}>
              <div className="card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="quote">“{item.quote}”</p>
                <h4>— {item.author}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="slider-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={handleNext} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;