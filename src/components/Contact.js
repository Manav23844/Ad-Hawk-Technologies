import React from "react";

function Contact() {
  return (
    <section className="section light" id="contact">
      <h2>Contact Us</h2>
      <p className="section-text">
        Get in touch with us to discuss your project and discover how we can help 
        your business grow through innovative digital solutions.
      </p>

      <div className="contact-card">
        <div className="contact-grid">
          <div>
            <label className="field">
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" placeholder="you@email.com" />
            </label>

            <label className="field">
              <span>Phone Number</span>
              <input type="tel" placeholder="+91 9876543210" />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea placeholder="Tell us what you want to achieve…" rows={5}></textarea>
            </label>

            <div className="contact-actions">
              <button className="btn" type="button">Send Message</button>
              <a className="btn btn-secondary" href="#services">View Services</a>
            </div>
          </div>

          <div className="contact-info">
            <h3>What happens next?</h3>
            <ul>
              <li>We’ll reply within 24 hours.</li>
              <li>Quick call to understand your goals.</li>
              <li>We share a simple plan + pricing.</li>
            </ul>

            {/* <div className="contact-pill">
              <strong>Tip:</strong> Include your website link for faster auditing.
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;