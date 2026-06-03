import React, { useState } from "react";

const teamData = [
  {
    id: "tim",
    name: "Timothy McClung",
    role: "Co-Founder · Growth Strategist & Digital Marketing Expert",
    image: require("../assets/team/tim.png"),
    bio: "\"I built Ad Hawk Technologies on a simple belief: small businesses deserve the same strategic firepower as the big players — without the complexity or confusion.\"\n\nTim McClung is the Co-Founder of Ad Hawk Technologies and a seasoned growth strategist with more than 20 years of experience helping brands scale intelligently in an ever-changing digital landscape. His career spans the full arc of modern marketing — from the early days of digital advertising to today's data-rich, performance-driven ecosystem — giving him a rare, grounded perspective that few strategists can match.\n\nTim's work is rooted in a direct, no-fluff approach to business growth. He partners closely with small business owners who are ready to grow but aren't sure where to start — helping them cut through the noise, identify the highest-leverage opportunities, and build a clear path forward. Whether the challenge is figuring out where to focus, understanding how to measure real progress, or determining whether marketing dollars are actually moving the needle, Tim brings the clarity and conviction to answer those questions honestly.\n\nWhat sets Tim apart is his belief that strategy without transparency is just guesswork. Every engagement is built on open communication, honest reporting, and a genuine commitment to the client's success — not just the appearance of it. He doesn't believe in hiding behind jargon or vanity metrics. His clients always know what's working, what isn't, and exactly what comes next.\n\nAt Ad Hawk Technologies, Tim has built a practice centered on data-driven decision-making paired with human-first partnership. He understands that for most small business owners, every dollar invested in growth carries real weight — and he treats it accordingly. His goal isn't just to deliver a service; it's to become the kind of trusted partner that business owners rely on when it matters most.\n\nWith two decades of brand-scaling experience and a track record of helping businesses find their footing and accelerate, Tim brings both the strategic depth and the personal investment that growing companies need to navigate today's digital ecosystem — and thrive in it.\n\nAd Hawk Technologies · Your Growth. Our Mission."
  },
  {
    id: "bipin",
    name: "Bipin Singh",
    role: "Chief Performance Officer",
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
  },
  {
    id: "jackson",
    name: "Jackson",
    role: "Director of Pawsitivity",
    image: require("../assets/team/Jack.jpeg"),
    bio: "Meet Jackson, our paw-sitively perfect Indian breed who keeps our team smiling! As the Director of Pawsitivity, Jackson is an expert in boosting morale and spreading joy. Whether he’s offering a warm greeting to clients or keeping an eye on the creative process, Jackson is always ready to lend a paw."
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