import React, { useEffect, useState } from "react";
import "../styles/RevealPage.css";

export default function ToonCoreReveal({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Play intro sound
    const audio = new Audio("/intro.wav");
    audio.volume = 0.8;
    audio.play().catch(() => {});

    // Timed fade-out + transition
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const finishTimer = setTimeout(() => onFinish && onFinish(), 4600);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`tooncore-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="tooncore-content">
        <svg
          className="tooncore-logo"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--anime-primary)" />
              <stop offset="100%" stopColor="var(--anime-accent)" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="52%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="tooncore-text"
          >
            SlayerCore
          </text>

          <g className="sparkles" aria-hidden="true">
            <polygon points="520,60 525,70 535,70 527,77 530,87 520,81 510,87 513,77 505,70 515,70" />
            <polygon points="360,150 363,157 370,157 365,162 367,169 360,165 353,169 355,162 350,157 357,157" />
            <polygon points="680,170 683,178 692,178 686,183 688,191 680,186 672,191 674,183 668,178 677,178" />
          </g>
        </svg>

        <p className="tooncore-tagline">Where code meets creativity ✨</p>
      </div>
    </div>
  );
}
