import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";

// GIFs
import artGif from "/character-gifs/art.gif";
import newsGif from "/character-gifs/news.gif";
import jobGif from "/character-gifs/job.gif";

export default function Projects() {
  const projectsRef = useRef([]);

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

    projectsRef.current.forEach((proj) => proj && observer.observe(proj));
    return () => observer.disconnect();
  }, []);

  const GitHubIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="github-icon"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2 
        c-3.2.7-3.87-1.39-3.87-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 
        1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56 
        -2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 
        1.21-3.13-.12-.3-.53-1.52.11-3.17 0 0 .99-.32 3.24 
        1.2A11.2 11.2 0 0 1 12 6.16c1 .01 2.01.14 2.95.42 
        2.25-1.52 3.24-1.2 3.24-1.2.64 1.65.23 2.87.11 
        3.17.75.82 1.21 1.86 1.21 3.13 0 4.45-2.7 
        5.43-5.28 5.72.42.36.8 1.1.8 2.22v3.29c0 
        .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );

  return (
    <section className="projects-container">
      {/* === HERO === */}
      <div className="projects-hero">
        <h1 className="projects-title">
          My <span className="toon-text">ToonTech</span> Creations 💡
        </h1>
        <p className="projects-sub">
          From playful web apps to real-world systems — every project tells a story! 🎬
        </p>
      </div>

      {/* === ONLINE ART GALLERY === */}
      <div className="project-banner fade-up" ref={(el) => (projectsRef.current[0] = el)}>
        <div className="project-content reverse">
          <div className="project-image">
            <div className="image-wrapper">
              <img src={artGif} alt="Online Art Gallery interface" loading="lazy" />
            </div>
          </div>

          <div className="project-text">
            <h2>🎨 Online Art Gallery</h2>
            <p className="project-desc">
              A creative platform to upload, browse, and showcase artwork online.
              Built using <strong>HTML, CSS, React, JavaScript, Spring Boot & SQL</strong>.
            </p>
            <p className="project-caption">“Where art meets the internet — SlayerCore style! 🖼️✨”</p>

            <div className="project-actions">
              <a
                href="https://github.com/sadikshaik01/OnlineArtGallery-Project.git"
                className="project-btn project-btn--repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> View on GitHub
              </a>

              <a
                href="https://onlineartgallery.slayercore.me/"
                className="project-btn project-btn--live"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === NEWS AGGREGATOR === */}
      <div className="project-banner fade-up" ref={(el) => (projectsRef.current[1] = el)}>
        <div className="project-content">
          <div className="project-image">
            <div className="image-wrapper">
              <img src={newsGif} alt="News Aggregator interface" loading="lazy" />
            </div>
          </div>

          <div className="project-text">
            <h2>📰 News Aggregator</h2>
            <p className="project-desc">
              A real-time breaking news application fetching headlines from multiple APIs.
            </p>
            <p className="project-caption">“Your daily headlines in a fun ToonCore layout 🚀📢”</p>

            <div className="project-actions">
              <a
                href="https://github.com/sadikshaik01/News-Aggregator-project.git"
                className="project-btn project-btn--repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> View on GitHub
              </a>

              <a
                href="https://newsaggregator.slayercore.me/"
                className="project-btn project-btn--live"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === JOB PORTAL === */}
      <div className="project-banner fade-up" ref={(el) => (projectsRef.current[2] = el)}>
        <div className="project-content reverse">
          <div className="project-image">
            <div className="image-wrapper">
              <img src={jobGif} alt="Job Portal interface" loading="lazy" />
            </div>
          </div>

          <div className="project-text">
            <h2>💼 Job Portal System</h2>
            <p className="project-desc">
              A complete job posting & seeking platform built with{" "}
              <strong>React, JavaScript, Spring Boot, SQL, HTML & CSS</strong>.
            </p>
            <p className="project-caption">“Helping people find their dream job — with style! 🎭”</p>

            <div className="project-actions">
              <a
                href="https://github.com/sadikshaik01/JobPortel.git"
                className="project-btn project-btn--repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> View on GitHub
              </a>

              <a
                href="https://github.com/sadikshaik01/JobPortel.git"
                className="project-btn project-btn--live"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
