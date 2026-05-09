import React from "react";
import { images } from "../assets/images";

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h2>Our Work</h2>
      <p className="section-text">
        Explore some of our recent projects where we helped brands grow through innovative 
        marketing strategies, modern design, and performance-driven solutions.
      </p>

      <div className="grid portfolio-grid">
        <div className="portfolio-item">
          <img src={images.services.seo} className="img-contain" alt="SEO growth campaign" loading="lazy" />
          <div className="portfolio-meta">
            <h3>SEO Growth</h3>
            <p>Keyword strategy + technical fixes to lift rankings and organic traffic.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={images.services.ppc} alt="PPC lead generation campaign" loading="lazy" />
          <div className="portfolio-meta">
            <h3>PPC Leads</h3>
            <p>High-intent search ads optimized for conversions and measurable ROI.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={images.services.branding} className="img-contain" alt="Branding and creative system" loading="lazy" />
          <div className="portfolio-meta">
            <h3>Brand & Creative</h3>
            <p>Messaging, visuals, and guidelines for a consistent brand presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;