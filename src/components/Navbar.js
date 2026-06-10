import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const wrapRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isServices = location.pathname.startsWith("/services");

  useEffect(() => {
    // close dropdown and mobile menu on route change
    setOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="nav">
      <Link className="logo" to="/" aria-label="Go to home">
        <img src="/ADHAWK_RED_PNG.png" className="logo-img" alt="Ad Hawk logo" fetchpriority="high" />
      </Link>

      <div className="links">
        <Link className={isHome ? "is-active" : ""} to="/">Home</Link>
        <div className="nav-dropdown" ref={wrapRef}>
          <button
            type="button"
            className={`nav-dropdown-trigger ${open ? "is-open" : ""} ${isServices ? "is-active" : ""}`}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls="services-menu"
            onClick={() => setOpen((v) => !v)}
          >
            Services <span className="nav-caret" aria-hidden="true">▾</span>
          </button>

          {open ? (
            <div className="nav-dropdown-menu" id="services-menu" role="menu" aria-label="Services">
              {servicesData.map((s) => (
                <Link
                  key={s.key}
                  role="menuitem"
                  className="nav-dropdown-item"
                  to={`/services/${s.key}`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <Link to="/?section=about">About</Link>
        <Link to="/?section=portfolio">Work</Link>
        <Link to="/?section=team">Team</Link>
        <Link to="/?section=testimonials">Testimonials</Link>
        <Link to="/?section=contact">Contact</Link>
      </div>

      <button 
        className="hamburger-btn" 
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-header">
          <Link className="logo" to="/" aria-label="Go to home" onClick={() => setMobileMenuOpen(false)}>
            <img src="/ADHAWK_RED_PNG.png" className="logo-img" alt="Ad Hawk logo" />
          </Link>
          <button 
            className="mobile-close-btn" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="mobile-nav-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/?section=about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/?section=portfolio" onClick={() => setMobileMenuOpen(false)}>Our Work</Link>
          <Link to="/?section=team" onClick={() => setMobileMenuOpen(false)}>Team</Link>
          <Link to="/?section=testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
          <Link to="/?section=contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;