import React, { useMemo, useState } from "react";
import { images } from "../assets/images";
import { Link } from "react-router-dom";

function Hero() {
  const videoSrc = useMemo(() => `${process.env.PUBLIC_URL}/hero.mp4`, []);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero">
      <div className="container hero-container" id="home">

        <div className="hero-text">
          <h1>Grow Your Business with Smart Digital Marketing</h1>
          <p>
            We combine creativity, strategy, and measurable performance to help brands scale.
            From search visibility to paid campaigns and content — we build marketing that
            drives leads today and brand value for the long term.
          </p>
          <div className="hero-cta">
            <Link className="btn" to="/?section=contact">Get a Free Consultation</Link>
            <Link className="btn btn-secondary" to="/services">Explore Services</Link>
          </div>
        </div>

        <div className="hero-img" aria-label="Hero marketing video">
          {videoError ? (
            <img src={images.hero} alt="Digital marketing strategy and branding" loading="eager" fetchpriority="high" />
          ) : (
            <>
              {!videoReady ? <div className="hero-video-placeholder" aria-hidden="true" /> : null}
              <video
                className={`hero-video ${videoReady ? "is-ready" : ""}`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={() => setVideoReady(true)}
                onError={() => setVideoError(true)}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default Hero;