import React, { useEffect, useRef } from "react";
import "../styles/Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiGit,
} from "react-icons/si";
import { FaUsers, FaLightbulb, FaCogs } from "react-icons/fa";

export default function Skills() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* ============================
     WEB DEVELOPMENT (Only MySQL added)
     ============================ */
  const webSkills = [
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql color="#00758F" /> }, // <-- ONLY DB ADDED
  ];

  /* ============================
     TOOLS (GitHub, Docker, Kubernetes, Git)
     ============================ */
  const tools = [
    { name: "GitHub", icon: <SiGithub color="#000" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <FaUsers color="#8A6FD1" /> },
    { name: "Problem Solving", icon: <FaCogs color="#8A6FD1" /> },
    { name: "Creativity", icon: <FaLightbulb color="#FFD43B" /> },
  ];

  const renderBadges = (skills) =>
    skills.map((skill, i) => (
      <div className="skill-badge" key={i}>
        <div className="icon">{skill.icon}</div>
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <section className="skills-container">
      <div className="skills-hero">
        <h1 className="skills-title">
          My <span className="toon-text">Power-Ups ⚡</span>
        </h1>
        <p className="skills-sub">Every hero has their own set of powers — here are mine!</p>
      </div>

      {/* WEB DEVELOPMENT */}
      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[0] = el)}>
        <h2>💻 Web Development</h2>
        <div className="skills-grid">{renderBadges(webSkills)}</div>
      </div>

      {/* TOOLS */}
      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2>🛡️ Tools</h2>
        <div className="skills-grid">{renderBadges(tools)}</div>
      </div>

      {/* SOFT SKILLS */}
      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>🎨 Soft Skills</h2>
        <div className="skills-grid">{renderBadges(softSkills)}</div>
      </div>
    </section>
  );
}
