import React, { useEffect, useRef } from "react";
import "../styles/Achievements.css";

/* === REAL LOGOS FROM public/character-pngs === */
import aceImg from "/character-pngs/ACE Aviatrix Certified Engineer.png";
import linguaskillImg from "/character-pngs/linguaskill.png";
import salesforceImg from "/character-pngs/salesforce.png";
import oracleImg from "/character-pngs/oracle.png";

/* === PDF Certificate Paths (exact filenames) === */
const acePDF = "/certificates/MultiCloudNetwork.pdf";
const linguaskillPDF = "/certificates/linguaskill.pdf";
/* <-- this matches the file you showed in VS Code */
const salesforcePDF = "/certificates/salesforce.pdf";
const oraclePDF = "/certificates/oracle-eCertificate-AI Fundations Associate.pdf";

export default function Achievements() {
  const bannersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    bannersRef.current.forEach((b) => b && observer.observe(b));
    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "ACE Aviatrix Certified Engineer",
      desc:
        "Cloud networking mastery — designed secure, scalable multi-cloud architectures with Aviatrix.",
      img: aceImg,
      full: acePDF,
    },
    {
      title: "Linguaskill Business English",
      desc:
        "Certified by Cambridge for English proficiency — fluent communication for global collaboration.",
      img: linguaskillImg,
      full: linguaskillPDF,
    },
    {
      title: "Salesforce AI Associate",
      desc:
        "Completed Salesforce AI fundamentals — integrating AI and CRM to deliver smarter automation.",
      img: salesforceImg,
      full: salesforcePDF,
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      desc:
        "This certifies that the above named is recognized by Oracle Corporation as Oracle Certified.",
      img: oracleImg,
      full: oraclePDF,
    },
  ];

  return (
    <section className="achievements-container">
      <div className="achievements-hero">
        <h1 className="achievements-title">
          My <span className="toon-text">Achievements</span> 🏅
        </h1>
        <p className="achievements-sub">
          Certifications that showcase my skills, curiosity, and love for both tech & fun 🚀
        </p>
      </div>

      {certificates.map((cert, i) => (
        <div
          key={i}
          ref={(el) => (bannersRef.current[i] = el)}
          className={`achievement-banner fade-up ${i % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="achievement-content">
            <div className="achievement-image">
              <img src={cert.img} alt={`${cert.title} certification badge`} loading="lazy" />
            </div>

            <div className="achievement-text">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>

              <a href={cert.full} target="_blank" rel="noopener noreferrer" className="view-btn">
                👀 View Certificate
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
