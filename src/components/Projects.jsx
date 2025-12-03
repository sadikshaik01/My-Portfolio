import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";

// ✅ Updated GIFs
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
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[0] = el)}
      >
        <div className="project-content reverse">
          <div className="project-image">
            <img src={artGif} alt="Online art gallery web application interface" loading="lazy" />
          </div>
          <div className="project-text">
            <h2>🎨 Online Art Gallery</h2>
            <p className="project-desc">
              A creative platform to upload, browse, and showcase artwork online.
              Developed using <strong>HTML, CSS, React, JavaScript, Spring Boot & SQL</strong>.
            </p>
            <p className="project-caption">
              “Where art meets the internet — SlayerCore style! 🖼️✨”
            </p>
            <a
              href="https://github.com/sadikshaik01/OnlineArtGallery-Project.git"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === NEWS AGGREGATOR === */}
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[1] = el)}
      >
        <div className="project-content">
          <div className="project-image">
            <img src={newsGif} alt="Real-time news aggregator application showing headlines" loading="lazy" />
          </div>
          <div className="project-text">
            <h2>📰 News Aggregator</h2>
            <p className="project-desc">
              A real-time news fetching application that collects top stories from
              multiple APIs and displays them in a clean UI.
            </p>
            <p className="project-caption">
              “Your daily headlines packed in a fun ToonCore layout 🚀📢”
            </p>
            <a
              href="https://github.com/sadikshaik01/news-aggregator.git"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === JOB PORTAL SYSTEM === */}
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[2] = el)}
      >
        <div className="project-content reverse">
          <div className="project-image">
            <img src={jobGif} alt="Job portal system with job postings and applications" loading="lazy" />
          </div>
          <div className="project-text">
            <h2>💼 Job Portal System</h2>
            <p className="project-desc">
              A complete job posting and seeking platform built using{" "}
              <strong>React, JavaScript, Spring Boot, SQL, HTML & CSS</strong>.
            </p>
            <p className="project-caption">
              “Helping people find their dream job — with a playful twist! 🎭”
            </p>
            <a
              href="https://github.com/sadikshaik01/OnlineArtGallery-Project.git"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
