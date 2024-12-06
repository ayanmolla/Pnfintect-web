import React from 'react';
import './Testimonials.css'

const testimonials = [
  {
    name: "Patrick Neeman",
    image: "https://via.placeholder.com/50",
    quote: "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.",
    attribution: "- Don Norman, Co-founder of the NNG"
  },
  {
    name: "Karen Mcgrane",
    image: "https://via.placeholder.com/50",
    quote: "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.",
    attribution: "- Don Norman, Co-founder of the NNG"
  },
  {
    name: "Dieter Rams",
    image: "https://via.placeholder.com/50",
    quote: "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.",
    attribution: "- Don Norman, Co-founder of the NNG"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="profile-image">
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
          <div className="testimonial-details">
            <h3 className="name">{testimonial.name}</h3>
            <div className="quote">
              <i className="quote-start">"</i>
              <p>{testimonial.quote}</p>
              <i className="quote-end">"</i>
            </div>
            <div className="attribution">{testimonial.attribution}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;