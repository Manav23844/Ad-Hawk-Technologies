import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function ServicesPage() {
  return (
    <section className="section services-page" id="services-page">
      <h2>Our Services</h2>
      <p className="section-text">
        Choose a service below to view the full details.
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

      <div className="service-page-actions">
        <Link className="btn btn-secondary" to="/">Back to Home</Link>
      </div>
    </section>
  );
}

