export default function ContactPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Contact Us</h1>

      <p style={styles.text}>📍 hyderabad, Telangana</p>
      <p style={styles.text}>📞 +91 9100964401</p>
      <p style={styles.text}>📧 pariscafe@gmail.com</p>

      <button style={styles.btn}>Send Message</button>
    </main>
  );
}

const styles: any = {
  main: {
    padding: "60px",
    color: "white",
    background: "linear-gradient(135deg,#050A1F,#0B2A5B,#000)",
    minHeight: "100vh",
  },

  title: {
    fontSize: "40px",
    color: "#D4AF37",
  },

  text: {
    marginTop: "10px",
    opacity: 0.85,
  },

  btn: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#D4AF37",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};