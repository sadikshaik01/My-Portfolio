import React, { useRef, useEffect } from "react";
import "../styles/Home.css";

// HERO GIF (using your main gif)
import mainGif from "/character-gifs/home.gif";

// Updated GIFs
import educationGif from "/character-gifs/Education.gif";
import hobbiesGif from "/character-gifs/Hobbies.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  const traitsSectionRef = useRef(null);
  const heroImageRef = useRef(null);

  const handleScrollToTraits = () =>
    traitsSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  // Parallax on hero image
  useEffect(() => {
    const img = heroImageRef.current;
    if (!img) return;

    const handleScroll = () => {
      const sc = window.scrollY;
      img.style.transform = `translateY(${-Math.min(sc * 0.06, 40)}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { id: 1, text: "Code Ninja 💻" },
    { id: 2, text: "UI Sorcerer 🪄" },
    { id: 3, text: "Dream Builder 🧠" },
    { id: 4, text: "Pixel Tinkerer 🎨" },
    { id: 5, text: "Curious Explorer 🚀" },
    { id: 6, text: "Design Thinker 💡" },
    { id: 7, text: "Vision Crafter 🔮" },
    { id: 8, text: "Idea Machine ⚙️" },
    { id: 9, text: "Creative Geek 🧩" },
    { id: 10, text: "Animation Lover 🌀" },
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="home-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="toon-text">SlayerCore</span>
          </h1>

          <p className="hero-subtitle">
            Designing smart, engaging, and fun web experiences with a touch of SlayerCore magic.
          </p>

          <button className="hero-btn" onClick={handleScrollToTraits}>
            Explore My World
          </button>
        </div>

        {/* Same main gif */}
        <div className="hero-image" ref={heroImageRef}>
          <img src={mainGif} alt="SlayerCore animated character hero illustration" />
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="traits-scroll-wrapper" ref={traitsSectionRef}>
        <h2 className="section-title">Who Am I?</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={4.2}
          loop
          centeredSlides
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4200}
          allowTouchMove
          grabCursor
          style={{ width: "100%", padding: "28px 0" }}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            600: { slidesPerView: 2.2 },
            900: { slidesPerView: 3.4 },
            1200: { slidesPerView: 4.2 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "18px",
                  background: "linear-gradient(145deg,#ffffff,#f6f0ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--anime-primary)",
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "0.4s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography variant="body1">{card.text}</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <h2 className="section-title">A Glimpse Into My World</h2>

        {/* EDUCATION */}
        <div className="about-block">
          <img src={educationGif} alt="Student studying computer science with books and laptop" loading="lazy" />
          <div>
            <h3>🎓 Education</h3>
            <p>B.Tech in CSE — deep diving into tech, design and creativity.</p>
          </div>
        </div>

        {/* HOBBIES */}
        <div className="about-block">
          <img src={hobbiesGif} alt="Anime character designing UI and sketching" loading="lazy" />
          <div>
            <h3>🎨 Hobbies</h3>
            <p>
              Designing UI, building apps, watching anime, sketching characters, watching movies!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
