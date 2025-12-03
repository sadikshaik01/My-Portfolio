import React, { useEffect, useRef } from "react";
import "../styles/About.css";

import profilePic from "/character-gifs/about.gif";
import schoolImg from "/character-gifs/school.gif";
import interImg from "/character-gifs/inter.gif";
import btechImg from "/character-gifs/btech.gif";

import myCV from "/character-gifs/SHAIK.SADIK-RESUME.pdf";

export default function About() {
  const bannersRef = useRef([]);

  // === Scroll Reveal ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    bannersRef.current.forEach((banner) => {
      if (banner) observer.observe(banner);
    });

    return () => observer.disconnect();
  }, []);

  // === SVG ICONS ===
  const GmailIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 
        22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.1h.1c.5-.9 
        1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8.1c0-1.9 0-4.4-2.7-4.4-2.7 
        0-3.1 2.1-3.1 4.2V24h-4V8z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2 
      c-3.2.7-3.87-1.39-3.87-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 
      1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56 
      -2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 
      1.21-3.13-.12-.3-.53-1.52.11-3.17 0 0 .99-.32 3.24 
      1.2A11.2 11.2 0 0 1 12 6.16c1 .01 2.01.14 2.95.42 
      2.25-1.52 3.24-1.2 3.24-1.2.64 1.65.23 2.87.11 
      3.17.75.82 1.21 1.86 1.21 3.13 0 4.45-2.7 
      5.43-5.28 5.72.42.36.8 1.1.8 2.22v3.29c0 
      .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
    </svg>
  );

  return (
    <section className="about-container">
      {/* === HERO === */}
      <div className="about-hero">
        <div className="hero-left" aria-hidden="false">
          <img
            src={profilePic}
            alt="Animated illustration of Shaik Sadik"
            className="about-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="hero-right">
          <h1 className="about-title">
            About <span className="toon-text">Me</span>
          </h1>

          <p className="about-intro">
            Hey there! 👋 I’m <strong>SHAIK SADIK</strong>, a{" "}
            <span className="highlight">Computer Science & Engineering student</span> at{" "}
            <strong>KL University</strong>, turning code into creativity!
          </p>

          <p className="about-desc">
            I love crafting web experiences that are smart, fun, and full of life — blending{" "}
            <strong>design</strong> and <strong>logic</strong> into something playful 🌟
          </p>

          {/* === SOCIAL LINKS WITH ICONS === */}
          <div className="contact-links about-links" role="navigation" aria-label="Social links">
            <a href="mailto:shaiksadik2968@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Shaik Sadik">
              <GmailIcon /> Gmail
            </a>

            <a href="https://www.linkedin.com/in/shaik-sadik-b23516328/" target="_blank" rel="noopener noreferrer" aria-label="Shaik Sadik on LinkedIn">
              <LinkedInIcon /> LinkedIn
            </a>

            <a href="https://github.com/sadikshaik01" target="_blank" rel="noopener noreferrer" aria-label="Shaik Sadik on GitHub">
              <GitHubIcon /> GitHub
            </a>

            <a href={myCV} target="_blank" rel="noopener noreferrer" aria-label="Download CV PDF">
              📄 CV
            </a>
          </div>
        </div>
      </div>

      {/* === EDUCATION SECTION BELOW (unchanged) === */}
      <div className="education-section">
        <h2 className="section-title">🎓 My Education Journey</h2>

        {/* B.Tech */}
        <div className="edu-banner fade-up" ref={(el) => (bannersRef.current[0] = el)}>
          <div className="edu-content">
            <div className="edu-image">
              <img src={btechImg} alt="B.Tech student" loading="lazy" />
            </div>

            <div className="edu-text">
              <h3>B.Tech in Computer Science & Engineering</h3>
              <h4>KL University, Guntur (2023–Present)</h4>
              <p className="edu-duration">Current CGPA: <strong>9.59</strong></p>
              <p className="edu-desc">
                Exploring <strong>Web Development</strong>, <strong>AI</strong>, and combining creativity with logic!
              </p>
            </div>
          </div>
        </div>

        {/* Intermediate */}
        <div className="edu-banner fade-left" ref={(el) => (bannersRef.current[1] = el)}>
          <div className="edu-content reverse">
            <div className="edu-image">
              <img src={interImg} alt="Intermediate student" loading="lazy" />
            </div>

            <div className="edu-text">
              <h3>Intermediate (MPC)</h3>
              <h4>Sri Sarada Junior College, Vijayawada (2021–2023)</h4>
              <p className="edu-cgpa">Percentage: <strong>93.5%</strong></p>
              <p className="edu-desc">Sharpened logic & problem-solving skills ✨</p>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="edu-banner fade-right" ref={(el) => (bannersRef.current[2] = el)}>
          <div className="edu-content">
            <div className="edu-image">
              <img src={schoolImg} alt="School student" loading="lazy" />
            </div>

            <div className="edu-text">
              <h3>Secondary Education (SSC)</h3>
              <h4>Vijnana Vihara School, Nutakki (2010–2021)</h4>
              <p className="edu-cgpa">CGPA: <strong>10.0</strong></p>
              <p className="edu-desc">Where curiosity met imagination 🌈</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
