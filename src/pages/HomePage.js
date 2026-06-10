import React, { useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/About";

const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Team = React.lazy(() => import("../components/Team"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const Contact = React.lazy(() => import("../components/Contact"));

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
      <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  );
}

