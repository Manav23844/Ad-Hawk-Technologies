import React from "react";
import { Link, useParams } from "react-router-dom";
import { getServiceByKey, servicesData } from "../data/servicesData";

export default function ServiceDetailPage() {
  const { key } = useParams();
  const service = getServiceByKey(key) ?? servicesData[0];

  if (!service) return null;

  return (
    <section className="section service-detail-page">
      <div className="service-detail-top">
        <Link className="btn btn-secondary btn-sm" to="/services">← All Services</Link>
        <Link className="btn btn-sm" to="/?section=contact">Contact</Link>
      </div>

      <article className="service-card service-card--detail">
        <div className={`service-media service-media--${service.key}`}>
          <img src={service.detailImage ?? service.image} alt={service.title} loading="lazy" />
          <div className="service-badge">{service.icon}</div>
        </div>

        <div className="service-body">
          <h2 className="service-title">{service.title}</h2>
          {service.headline ? <p className="service-headline">{service.headline}</p> : null}
          <p className="section-text service-intro-top">{service.intro}</p>

          {Array.isArray(service.description) && service.description.length ? (
            <div className="service-prose">
              {service.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ) : null}

          {Array.isArray(service.content) && service.content.length ? (
            <div className="service-rich">
              {service.content.map((block, idx) => {
                if (!block || typeof block !== "object") return null;

                if (block.type === "h3") {
                  return (
                    <h3 key={`${block.text}-${idx}`} className="service-section-title">
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "h4") {
                  return (
                    <h4 key={`${block.text}-${idx}`} className="service-subsection-title">
                      {block.text}
                    </h4>
                  );
                }

                if (block.type === "p") {
                  return (
                    <p key={`${block.text}-${idx}`} className="service-paragraph">
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "ul" && Array.isArray(block.items)) {
                  return (
                    <ul key={`ul-${idx}`} className="service-rich-list">
                      {block.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "ol" && Array.isArray(block.items)) {
                  return (
                    <ol key={`ol-${idx}`} className="service-rich-ordered">
                      {block.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ol>
                  );
                }

                return null;
              })}
            </div>
          ) : null}

          {Array.isArray(service.whyChoose) && service.whyChoose.length ? (
            <div className="service-callout">
              <h4>Why Choose Our Performance Marketing Services?</h4>
              <div className="service-pills">
                {service.whyChoose.map((x) => (
                  <span key={x.label} className="pill">{x.label}</span>
                ))}
              </div>
            </div>
          ) : null}

          {Array.isArray(service.performanceServices) && service.performanceServices.length ? (
            <div className="service-blocks">
              <h4>Our Performance Marketing Services</h4>
              <div className="service-block-grid">
                {service.performanceServices.map((s) => (
                  <div key={s.title} className="service-block">
                    <h3>{s.title}</h3>
                    {s.body ? <p>{s.body}</p> : null}
                    {Array.isArray(s.bullets) && s.bullets.length ? (
                      <ul>
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="service-split">
            <div>
              <h4>What we offer</h4>
              <ul>
                {service.offers.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Benefits</h4>
              <ul className="service-benefits">
                {service.benefits.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-actions">
            <Link className="btn btn-sm" to="/?section=contact">Get Pricing</Link>
            <Link className="btn btn-secondary btn-sm" to="/?section=portfolio">See Examples</Link>
          </div>
        </div>
      </article>
    </section>
  );
}

