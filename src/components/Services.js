import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <section className="section" id="services">
      <h2>Our Services</h2>
      <p className="section-text">
        A full suite of digital marketing services — built to increase visibility, generate
        qualified leads, and turn attention into revenue.
      </p>

      <div className="service-menu">
        {servicesData.map((s) => (
          <Link key={s.key} className="service-menu-item" to={`/services/${s.key}`}>
            <div className={`service-menu-media service-media--${s.key}`}>
              <img src={s.image} alt={s.title} loading="lazy" />
            </div>
            <div className="service-menu-text">
              <div className="service-menu-title">{s.title}</div>
              <div className="service-menu-sub">{s.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;