import React from "react";

function Team() {
  return (
    <section className="section light" id="team">
      <h2>Our Team</h2>
      <p className="section-text">
        Our team consists of creative thinkers, developers, and marketing experts dedicated 
        to delivering high-quality solutions and exceptional results for every client.
      </p>

      <div className="grid team-grid">
        <div className="card">
          <div className="avatar" aria-hidden="true">
            <img src={require("../assets/team/tim.png")} alt="" />
          </div>
          <h3>Timothy McClung</h3>
          <p>Co-Founder - SEO | PPC | SMO | Web Design</p>
        </div>

        <div className="card">
          <div className="avatar" aria-hidden="true">
            <img src={require("../assets/team/bipin.png")} alt="" />
          </div>
          <h3>Bipin Singh</h3>
          <p>Digital/Search Marketing Vetran</p>
        </div>

        <div className="card">
          <div className="avatar" aria-hidden="true">
            <img src={require("../assets/team/aayushya.png")} alt="" />
          </div>
          <h3>Aayushya Bajpai</h3>
          <p>Social Media Marketing Maven</p>
        </div>

        <div className="card">
          <div className="avatar" aria-hidden="true">
            <img src={require("../assets/team/abhishek.png")} alt="" />
          </div>
          <h3>Abhishek Sharma</h3>
          <p>Digital Marketing Executive</p>
        </div>

        <div className="card">
          <div className="avatar" aria-hidden="true">
            <img src={require("../assets/team/manav.png")} alt="" />
          </div>
          <h3>Manav Mangonda</h3>
          <p>Full Stack Developer</p>
        </div>


      </div>
    </section>
  );
}

export default Team;