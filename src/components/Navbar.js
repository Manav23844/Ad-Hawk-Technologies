import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isServices = location.pathname.startsWith("/services");

  useEffect(() => {
    // close dropdown on route change
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <nav className="nav">
      <Link className="logo" to="/" aria-label="Go to home">
        <img src="/ADHAWK_RED_PNG.png" className="logo-img" alt="Ad Hawk logo" />
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
    </nav>
  );
}

export default Navbar;