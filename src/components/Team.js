import React, { useState } from "react";

const teamData = [
  {
    id: "tim",
    name: "Timothy McClung",
    role: "Co-Founder - SEO | PPC | SMO | Web Design",
    image: require("../assets/team/tim.png"),
    bio: "Co-Founder at Ad Hawk Technologies with expertise in SEO, PPC, SMO, and Web Design."
  },
  {
    id: "bipin",
    name: "Bipin Singh",
    role: "Digital/Search Marketing Vetran",
    image: require("../assets/team/bipin.png"),
    bio: "More than 14 years of experience in digital marketing, SEM/SEO with a strong background of campaign creation, management and optimization. Email marketing, brand management and social media marketing for clients across finance, automotive, banking, SaaS, healthcare, hospitality, telecom, life insurance and real estate domains. Specializing in paid media (search/social) and programmatic media buying (RTB/ DV360/SA360), also creative and resourceful, with ability to manage performance based online media campaigns such as SEO(onpage, offpage), email marketing, social media marketing & display Marketing, programmatic marketing, online media planning, development of websites and related apps, as well as creative banners. Highly motivated and very strong in research and have made sure to keep myself stay abreast of the latest digital marketing trends by following/writing/ sharing blogs and articles"
  },
  {
    id: "aayushya",
    name: "Aayushya Bajpai",
    role: "Social Media Marketing Maven",
    image: require("../assets/team/aayushya.png"),
    bio: "Aayushya is a strategic storyteller and digital reputation lead with 13+ years of experience building brands and amplifying leadership voices across sectors. He spearheads multi-platform campaigns that fuse content, strategy, and reputation outcomes, enabling brands and leaders to shape narratives that matter. He has led marquee digital campaigns and IPs for Tata Power and its leadership, and partnered with top names across healthcare (LVPEI), real estate (CoWrks), automotive (Hyundai), lifestyle (Bosch, Dabur), and entertainment (20th Century Fox, Prime Video, Lionsgate)."
  },
  {
    id: "abhishek",
    name: "Abhishek Sharma",
    role: "Digital Marketing Executive",
    image: require("../assets/team/abhishek.png"),
    bio: "Abhishek Sharma is a Digital Marketing Executive & Performance Marketer at Ad Hawk Technologies, passionate about creating data-driven and result-oriented digital campaigns. Skilled in Google Ads, Meta Ads, SEO, Social Media Marketing, lead generation, and performance analytics, with a strong focus on building impactful online brand presence and maximizing campaign performance.\n\nDedicated to developing creative and conversion-focused marketing strategies that help businesses increase visibility, engagement, and ROI. Continuously learning and upgrading expertise in digital advertising, campaign optimization, and marketing analytics to deliver smarter and more effective digital solutions."
  },
  {
    id: "manav",
    name: "Manav Mangonda",
    role: "Full Stack Developer",
    image: require("../assets/team/Manav.jpeg"),
    bio: "Frontend Developer at Ad Hawk Technologies passionate about creating modern, responsive, and user-friendly web experiences. Specialized in building clean and interactive websites using React.js, Tailwind CSS, JavaScript, and modern UI frameworks.\n\nFocused on developing fast, visually appealing, and performance-driven websites that help businesses strengthen their digital presence. Experienced in creating responsive landing pages and dynamic web applications with a strong emphasis on functionality and user experience.\n\nContinuously learning and improving skills in frontend development, UI/UX design, and full-stack technologies to deliver better digital solutions for clients and users."
  }
];

function Team() {
  const [activeMember, setActiveMember] = useState(null);

  const openModal = (member) => setActiveMember(member);
  const closeModal = () => setActiveMember(null);

  return (
    <section className="section light" id="team">
      <h2>Our Team</h2>
      <p className="section-text">
        Our team consists of creative thinkers, developers, and marketing experts dedicated 
        to delivering high-quality solutions and exceptional results for every client.
      </p>

      <div className="grid team-grid">
        {teamData.map((member) => (
          <div 
            className="card" 
            key={member.id} 
            onClick={() => openModal(member)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') openModal(member); }}
          >
            <div className="avatar" aria-hidden="true">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {activeMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeMember.name}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body-content">
                <div className="modal-avatar">
                  <img src={activeMember.image} alt={activeMember.name} />
                </div>
                <div className="modal-info">
                  <p className="modal-role">{activeMember.role}</p>
                  <div className="modal-bio">
                    {activeMember.bio.split('\n').map((paragraph, idx) => {
                      if (!paragraph.trim()) return null;
                      return <p key={idx}>{paragraph}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Team;