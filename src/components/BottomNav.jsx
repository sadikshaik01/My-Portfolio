import React, { useState, useEffect, useRef } from "react";
import "../styles/BottomNav.css";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaRocket,
  FaMedal,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");
  const highlightRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", path: "/" },
    { id: "about", icon: <FaUserAlt />, label: "About", path: "/about" },
    { id: "skills", icon: <FaTools />, label: "Skills", path: "/skills" },
    { id: "projects", icon: <FaRocket />, label: "Projects", path: "/projects" },
    { id: "achievements", icon: <FaMedal />, label: "Achievements", path: "/achievements" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const current = location.pathname.replace("/", "") || "home";
    setActive(current);
  }, [location]);

  useEffect(() => {
    const nav = navRef.current;
    const highlight = highlightRef.current;

    if (!nav || !highlight) return;

    const buttons = nav.querySelectorAll(".nav-btn");
    const index = navItems.findIndex((i) => i.id === active);

    if (index >= 0) {
      const rect = buttons[index].getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }
  }, [active]);

  const handleClick = (item) => {
    setActive(item.id);
    navigate(item.path);
  };

  return (
    <nav className="tooncore-nav" ref={navRef}>
      <div className="nav-highlight" ref={highlightRef}></div>

      {navItems.map((item) => (
        <div key={item.id} className="nav-item">
          <button
            className={`nav-btn ${active === item.id ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            <span className="icon">{item.icon}</span>
            <span className="sparkle"></span>
          </button>
          <div className="nav-label">{item.label}</div>
        </div>
      ))}
    </nav>
  );
}
