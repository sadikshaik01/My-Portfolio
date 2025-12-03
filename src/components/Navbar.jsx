import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="nav-inner">
        <div className="site-logo">★ SlayerCore</div>
        <nav className="site-navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
