import React from "react";

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <h2>What Clients Say</h2>
      <p className="section-text">
        Real feedback from teams who wanted more visibility, better leads, and consistent growth.
      </p>

      <div className="grid">

        <div className="card">
          <p className="quote">
            “Our leads improved within weeks. The campaigns were clean, tracked properly, and
            optimized every week.”
          </p>
          <h4>— Client A, Local Services</h4>
        </div>

        <div className="card">
          <p className="quote">
            “Professional, responsive, and very clear reporting. We finally understand what’s
            working and why.”
          </p>
          <h4>— Client B, E‑commerce</h4>
        </div>

        <div className="card">
          <p className="quote">
            “The SEO work improved our rankings and the content feels on-brand. Great balance of
            creativity and performance.”
          </p>
          <h4>— Client C, Startup</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;