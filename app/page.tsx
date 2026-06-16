"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGooglePlay,
} from "react-icons/fa";

export default function HomePage() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={styles.main}>

      {/* 🌟 PARALLAX BACKGROUND */}
      <div
        style={{
          ...styles.bg,
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      {/* 📍 FLOATING ICONS */}
      <div style={styles.fabContainer}>

        <a href="https://maps.google.com" target="_blank" style={styles.iconBtn}>
          <FaMapMarkerAlt />
        </a>

        <a href="https://instagram.com" target="_blank" style={styles.iconBtn}>
          <FaInstagram />
        </a>

        <a href="mailto:pariscafe@gmail.com" style={styles.iconBtn}>
          <FaEnvelope />
        </a>

        <a href="https://play.google.com" target="_blank" style={styles.iconBtn}>
          <FaGooglePlay />
        </a>

      </div>

      {/* 🔥 HERO SECTION */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={styles.title}
        >
          Pari’s Café
        </motion.h1>

        <p style={styles.subtitle}>
          Luxury in every sip ☕ | Cream Caramel Experience
        </p>

        <div style={styles.actions}>
          <button style={styles.goldBtn} onClick={() => router.push("/menu")}>
            Explore Menu
          </button>

          <button style={styles.outlineBtn} onClick={() => router.push("/about")}>
            About Us
          </button>

          <button style={styles.outlineBtn} onClick={() => router.push("/contact")}>
            Contact
          </button>
        </div>
      </section>

      {/* 📜 STORY */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.section}
      >
        <h2 style={styles.heading}>Pari’s Story</h2>
        <p style={styles.text}>
          Pari’s Café is a luxury beverage brand built with cream caramel elegance.
          Every sip represents premium taste, emotion, and craftsmanship.
          It blends global café culture with modern luxury experience.
        </p>
      </motion.section>

      {/* 👨‍💼 FOUNDER */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.section}
      >
        <h2 style={styles.heading}>Founder — Sai Chand</h2>

        <img
          src="/images/founder.jpg"
          style={styles.founderImg}
          alt="Founder"
        />

        <p style={styles.text}>
          Sai Chand is the visionary founder of Pari’s Café.
          He built this brand with passion for beverages and luxury experience.
          His mission is to take Pari’s Café global.
        </p>
      </motion.section>

    </main>
  );
}

const styles: any = {

  main: {
    fontFamily: "Arial",
    color: "#3a2f1f",
    background: "#f3e0c7",
    overflow: "hidden",
  },

  /* 🌟 CARAMEL BACKGROUND */
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "120%",
    background:
      "radial-gradient(circle at top, #fff3e0, #f3e0c7, #e6c79c, #d2a679)",
    zIndex: -1,
  },

  /* 🔥 HERO */
  hero: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  /* 🌟 BIG GOLD TITLE */
  title: {
    fontSize: "140px",
    fontWeight: "bold",
    background: "linear-gradient(90deg,#D4AF37,#FFD700,#b8860b)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 30px rgba(212,175,55,0.4)",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
  },

  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  goldBtn: {
    padding: "12px 22px",
    background: "linear-gradient(90deg,#D4AF37,#f5d76e)",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  outlineBtn: {
    padding: "12px 22px",
    background: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(212,175,55,0.5)",
    color: "#3a2f1f",
    borderRadius: "10px",
    cursor: "pointer",
  },

  section: {
    maxWidth: "900px",
    margin: "80px auto",
    padding: "30px",
    background: "rgba(255,255,255,0.6)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
  },

  heading: {
    color: "#b8860b",
    fontSize: "28px",
    marginBottom: "10px",
  },

  text: {
    lineHeight: "1.8",
    fontSize: "15px",
    opacity: 0.9,
  },

  founderImg: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #D4AF37",
    margin: "15px 0",
  },

  /* 📍 FLOATING ICONS */
  fabContainer: {
    position: "fixed",
    right: "20px",
    bottom: "90px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 9999,
  },

  iconBtn: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: "linear-gradient(90deg,#D4AF37,#f5d76e)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#3a2f1f",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
};