"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Pari’s Café</div>

      <div style={styles.links}>
        <Link href="/menu" style={styles.link}>Explore Menu</Link>
        <Link href="/about" style={styles.link}>About Us</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles: any = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#D4AF37",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    opacity: 0.85,
    fontSize: "14px",
  },
};