export default function AboutPage() {
  return (
    <main style={styles.main}>

      <section style={styles.hero}>
        <h1 style={styles.title}>About Pari’s Café</h1>
        <p style={styles.subtitle}>
          A luxury beverage brand built on passion & taste ☕
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Story</h2>
        <p style={styles.text}>
          Pari’s Café was created to bring a premium café experience inspired by
          Italian streets into modern lifestyle. Every drink is crafted with emotion,
          detail, and luxury.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Founder</h2>
        <p style={styles.text}>
          <b>Sai Chand</b> founded Pari’s Café with a vision to combine passion for
          food, beverages, and business innovation. His goal is to build a global
          café brand that delivers luxury in every sip.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Vision</h2>
        <p style={styles.text}>
          To become a globally recognized café brand that blends taste, experience,
          and emotional connection with every drink.
        </p>
      </section>

    </main>
  );
}

const styles: any = {

  main: {
    fontFamily: "Arial",
    color: "white",
    background: "linear-gradient(135deg,#050A1F,#0B2A5B,#000)",
    minHeight: "100vh",
    padding: "40px 20px",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },

  title: {
    fontSize: "42px",
    background: "linear-gradient(90deg,#D4AF37,#fff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  subtitle: {
    opacity: 0.7,
    marginTop: "10px",
  },

  section: {
    maxWidth: "800px",
    margin: "40px auto",
    textAlign: "center",
  },

  heading: {
    fontSize: "28px",
    color: "#D4AF37",
    marginBottom: "10px",
  },

  text: {
    opacity: 0.85,
    lineHeight: "1.7",
  },
};