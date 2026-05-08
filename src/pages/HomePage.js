import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/About";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;

    const el = document.getElementById(section);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.search]);

  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

