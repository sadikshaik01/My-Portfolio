import React, { useEffect, useState } from "react";
import "../styles/Loader.css";

/**
 * Loader: shows animated typing title + rotating descriptors + animated dots.
 * Calls onFinish when the user clicks Explore (or you can wire it to auto).
 */
export default function Loader({ onFinish }) {
  // phrases to cycle for the subtitle (will type each)
  const descriptors = [
    "Forging your anime portal",
    "Summoning the battle aura",
    "Polishing neon frames",
    "Tuning pixel choreography",
  ];

  const [titleTyped, setTitleTyped] = useState(""); // typed main title
  const [subtitleTyped, setSubtitleTyped] = useState(""); // typed descriptor
  const [currentDescriptor, setCurrentDescriptor] = useState(0);
  const [showExplore, setShowExplore] = useState(false);
  const [dotsState, setDotsState] = useState(0); // 0..2 for dot pulses

  // Main title typing once
  useEffect(() => {
    const full = "Summon the Anime Realm…";
    let i = 0;
    const speed = 45;
    const t = setInterval(() => {
      i++;
      setTitleTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, []);

  // Cycle through descriptors with typing + pause + erase
  useEffect(() => {
    let mounted = true;
    const typeDelay = 40;
    const holdDelay = 1400;
    const eraseDelay = 30;

    function typeString(str, cb) {
      let j = 0;
      const tt = setInterval(() => {
        j++;
        if (!mounted) return clearInterval(tt);
        setSubtitleTyped(str.slice(0, j));
        if (j >= str.length) {
          clearInterval(tt);
          setTimeout(cb, holdDelay);
        }
      }, typeDelay);
    }

    function eraseString(cb) {
      let k = subtitleTyped.length;
      const et = setInterval(() => {
        k--;
        if (!mounted) return clearInterval(et);
        setSubtitleTyped((s) => s.slice(0, -1));
        if (k <= 0) {
          clearInterval(et);
          setTimeout(cb, 120);
        }
      }, eraseDelay);
    }

    function loopDescriptor(idx) {
      const str = descriptors[idx];
      typeString(str, () => {
        // after hold, erase then go next
        eraseString(() => {
          const next = (idx + 1) % descriptors.length;
          setCurrentDescriptor(next);
          loopDescriptor(next);
        });
      });
    }

    // start after a short delay (wait for main title to appear)
    const starter = setTimeout(() => loopDescriptor(currentDescriptor), 650);
    return () => {
      mounted = false;
      clearTimeout(starter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // show Explore button after 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowExplore(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // animate dot index (visual only)
  useEffect(() => {
    const id = setInterval(() => {
      setDotsState((d) => (d + 1) % 3);
    }, 420);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="loader-wrapper" role="status" aria-live="polite">
      <div className="loader-content">
        <div className="loader-avatar" aria-hidden="true">
          <img
            src="/gare5.gif"
            alt="Animated character"
            className="loader-avatar-img"
            draggable="false"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="loader-title" aria-hidden>
          {/* typed title */}
          <span className="typed">{titleTyped}</span>
        </h1>

        <p className="loader-subtitle" aria-live="polite">
          {/* typed descriptor with subtle ellipsis */}
          <span className="typed-sub">{subtitleTyped}</span>
        </p>

        {/* improved dots — visuals use dotsState but kept aria-hidden */}
        <div className="loader-dots" aria-hidden="true">
          <span className={`dot ${dotsState === 0 ? "active" : ""}`} />
          <span className={`dot ${dotsState === 1 ? "active" : ""}`} />
          <span className={`dot ${dotsState === 2 ? "active" : ""}`} />
        </div>

        <div className={`explore-wrap ${showExplore ? "visible" : ""}`}>
          <button
            className="explore-btn"
            onClick={() => onFinish && onFinish()}
            aria-haspopup="dialog"
            aria-expanded="false"
          >
            ✨ Explore the Realm
          </button>
        </div>
      </div>
    </div>
  );
}
